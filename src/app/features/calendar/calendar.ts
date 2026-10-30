import { Component, computed, inject, signal } from '@angular/core';
import { EntryForm } from './components/entry-form/entry-form';
import { CycleEntry } from './models/cycle-entry';
import { CycleEntryService } from '../../core/services/cycle-entry';

interface CycleSettings {
  lastPeriodStart: string;
  cycleLength: number;
  periodLength: number;
}

@Component({
  selector: 'app-calendar',
  imports: [EntryForm],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  private entryService = inject(CycleEntryService);

  private readonly settingsKey = 'love-cycle-settings';

  currentDate = signal(new Date());
  selectedDate = signal(new Date());
  showEntryForm = signal(false);

  cycleSettings = signal<CycleSettings | null>(this.loadCycleSettings());

  monthName = computed(() =>
    this.currentDate().toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric',
    })
  );

  selectedDateKey = computed(() => this.dateKey(this.selectedDate()));

  selectedEntry = computed(() =>
    this.entryService.getEntry(this.selectedDateKey())
  );

  days = computed(() => {
    const date = this.currentDate();
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    return [
      ...Array.from({ length: firstDay }, () => null),
      ...Array.from({ length: totalDays }, (_, index) => index + 1),
    ];
  });

  private loadCycleSettings(): CycleSettings | null {
    try {
      const saved = localStorage.getItem(this.settingsKey);

      if (!saved) return null;

      const settings = JSON.parse(saved);

      if (!settings.lastPeriodStart) return null;

      return {
        lastPeriodStart: settings.lastPeriodStart,
        cycleLength: Number(settings.cycleLength) || 28,
        periodLength: Number(settings.periodLength) || 5,
      };
    } catch {
      return null;
    }
  }

  private dateKey(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private dateFromKey(key: string): Date {
    const [year, month, day] = key.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  private daysBetween(start: Date, end: Date): number {
    const startUTC = Date.UTC(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );

    const endUTC = Date.UTC(
      end.getFullYear(),
      end.getMonth(),
      end.getDate()
    );

    return Math.round((endUTC - startUTC) / 86400000);
  }

  private cyclePosition(day: number): number | null {
    const settings = this.cycleSettings();

    if (!settings) return null;

    const target = new Date(
      this.currentDate().getFullYear(),
      this.currentDate().getMonth(),
      day
    );

    const start = this.dateFromKey(settings.lastPeriodStart);
    const difference = this.daysBetween(start, target);

    if (difference < 0) return null;

    return difference % settings.cycleLength;
  }

  previousMonth(): void {
    this.currentDate.update(date =>
      new Date(date.getFullYear(), date.getMonth() - 1, 1)
    );
  }

  nextMonth(): void {
    this.currentDate.update(date =>
      new Date(date.getFullYear(), date.getMonth() + 1, 1)
    );
  }

  selectDay(day: number | null): void {
    if (!day) return;

    const current = this.currentDate();

    this.selectedDate.set(
      new Date(current.getFullYear(), current.getMonth(), day)
    );

    this.showEntryForm.set(false);
  }

  isToday(day: number | null): boolean {
    if (!day) return false;

    const today = new Date();
    const current = this.currentDate();

    return (
      day === today.getDate() &&
      current.getMonth() === today.getMonth() &&
      current.getFullYear() === today.getFullYear()
    );
  }

  isSelected(day: number | null): boolean {
    if (!day) return false;

    const selected = this.selectedDate();
    const current = this.currentDate();

    return (
      day === selected.getDate() &&
      current.getMonth() === selected.getMonth() &&
      current.getFullYear() === selected.getFullYear()
    );
  }

  isPeriod(day: number | null): boolean {
    if (!day) return false;

    const position = this.cyclePosition(day);
    const settings = this.cycleSettings();

    return position !== null &&
      settings !== null &&
      position < settings.periodLength;
  }

  isOvulation(day: number | null): boolean {
    if (!day) return false;

    const position = this.cyclePosition(day);
    const settings = this.cycleSettings();

    if (position === null || !settings) return false;

    const ovulationDay = settings.cycleLength - 14;

    return position === ovulationDay;
  }

  isFertile(day: number | null): boolean {
    if (!day) return false;

    const position = this.cyclePosition(day);
    const settings = this.cycleSettings();

    if (position === null || !settings) return false;

    const ovulationDay = settings.cycleLength - 14;

    return (
      position >= ovulationDay - 5 &&
      position < ovulationDay
    );
  }

  dayIndicators(day: number): string[] {
    const key = this.dateKey(
      new Date(
        this.currentDate().getFullYear(),
        this.currentDate().getMonth(),
        day
      )
    );

    const entry = this.entryService.getEntry(key);

    if (!entry) return [];

    const indicators: string[] = [];

    if (entry.flow === 'light') indicators.push('🩸');
    if (entry.flow === 'medium') indicators.push('🩸🩸');
    if (entry.flow === 'heavy') indicators.push('🩸🩸🩸');

    if (entry.sexualActivity === 'yes') {
      indicators.push('❤️');
    }

    if (entry.contraceptiveStatus === 'taken') {
      indicators.push('💊');
    }

    if (entry.contraceptiveStatus === 'missed') {
      indicators.push('❌');
    }

    if (entry.mood) {
      indicators.push(this.moodEmoji(entry.mood));
    }

    return indicators;
  }

  moodEmoji(mood: string): string {
    const emojis: Record<string, string> = {
      Feliz: '😊',
      Tranquila: '😌',
      Carinhosa: '🥰',
      Neutra: '😐',
      Ansiosa: '😰',
      Irritada: '😤',
      Triste: '😢',
      Sensível: '🥺',
      Cansada: '😴',
      Animada: '✨'
    };

    return emojis[mood] ?? '🌸';
  }

  flowLabel(flow: CycleEntry['flow']): string {
    const labels = {
      none: 'Sem fluxo',
      light: 'Leve',
      medium: 'Moderado',
      heavy: 'Intenso',
    };

    return labels[flow];
  }

  protectionLabel(method?: CycleEntry['protectionMethod']): string {
    const labels = {
      condom: 'Com preservativo',
      'no-condom': 'Sem preservativo',
      other: 'Outro método',
      'prefer-not-to-say': 'Não informado'
    };

    return method ? labels[method] : 'Não informado';
  }

  contraceptiveLabel(status?: CycleEntry['contraceptiveStatus']): string {
    const labels = {
      taken: 'Tomou',
      missed: 'Não tomou',
      'not-used': 'Não utiliza'
    };

    return status ? labels[status] : 'Não informado';
  }

  openEntryForm(): void {
    this.showEntryForm.set(true);
  }

  closeEntryForm(): void {
    this.showEntryForm.set(false);
  }

  saveEntry(entry: CycleEntry): void {
    this.entryService.saveEntry(entry);
    this.showEntryForm.set(false);
  }
}