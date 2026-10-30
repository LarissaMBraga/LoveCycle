import { Component, computed, inject, signal } from '@angular/core';
import { EntryForm } from './components/entry-form/entry-form';
import { CycleEntry } from './models/cycle-entry';
import { CycleEntryService } from '../../core/services/cycle-entry';

@Component({
  selector: 'app-calendar',
  imports: [EntryForm],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  private entryService = inject(CycleEntryService);

  currentDate = signal(new Date());
  selectedDate = signal(new Date());
  showEntryForm = signal(false);

  monthName = computed(() =>
    this.currentDate().toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric',
    })
  );

  selectedDateKey = computed(() => {
    const date = this.selectedDate();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  });

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

  previousMonth() {
    this.currentDate.update(date =>
      new Date(date.getFullYear(), date.getMonth() - 1, 1)
    );
  }

  nextMonth() {
    this.currentDate.update(date =>
      new Date(date.getFullYear(), date.getMonth() + 1, 1)
    );
  }

  selectDay(day: number | null) {
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

    return day >= 10 && day <= 14;
  }

  openEntryForm() {
    this.showEntryForm.set(true);
  }

  closeEntryForm() {
    this.showEntryForm.set(false);
  }

  saveEntry(entry: CycleEntry) {
    this.entryService.saveEntry(entry);
    this.showEntryForm.set(false);
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
}