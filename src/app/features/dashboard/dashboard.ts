import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CycleSettings {
  lastPeriodStart: string;
  cycleLength: number;
  periodLength: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly storageKey = 'love-cycle-settings';

  lastPeriodStart = '';
  cycleLength = 28;
  periodLength = 5;

  constructor() {
    this.loadSettings();
  }

  get hasCycleData(): boolean {
    return !!this.lastPeriodStart && this.daysSinceLastPeriod !== null;
  }

  get daysSinceLastPeriod(): number | null {
    if (!this.lastPeriodStart) return null;

    const start = this.parseDate(this.lastPeriodStart);
    const today = this.parseDate(this.getTodayKey());

    if (!start || !today) return null;

    const difference = this.dateDifference(start, today);

    return difference >= 0 ? difference : null;
  }

  get cycleDay(): number | null {
    if (this.daysSinceLastPeriod === null) return null;

    return (this.daysSinceLastPeriod % this.cycleLength) + 1;
  }

  get currentPhase(): string {
    if (this.cycleDay === null) return '';

    const ovulationDay = Math.max(1, this.cycleLength - 14);
    const fertileStart = Math.max(1, ovulationDay - 5);

    if (this.cycleDay <= this.periodLength) {
      return 'Menstrual';
    }

    if (this.cycleDay < fertileStart) {
      return 'Folicular';
    }

    if (this.cycleDay < ovulationDay) {
      return 'Janela fértil';
    }

    if (this.cycleDay === ovulationDay) {
      return 'Ovulação estimada';
    }

    return 'Lútea';
  }

  get nextPeriodDate(): string {
    if (this.daysSinceLastPeriod === null) return '';

    const daysUntil = this.cycleLength -
      (this.daysSinceLastPeriod % this.cycleLength);

    const nextDate = this.parseDate(this.lastPeriodStart)!;
    nextDate.setDate(nextDate.getDate() + this.daysSinceLastPeriod + daysUntil);

    return this.formatDate(nextDate);
  }

  get daysUntilNextPeriod(): number | null {
    if (this.daysSinceLastPeriod === null) return null;

    return this.cycleLength -
      (this.daysSinceLastPeriod % this.cycleLength);
  }

  get ovulationDate(): string {
    return this.getCycleDate(Math.max(1, this.cycleLength - 14));
  }

  get fertileStartDate(): string {
    return this.getCycleDate(Math.max(1, this.cycleLength - 19));
  }

  get fertileEndDate(): string {
    return this.ovulationDate;
  }

  private getCycleDate(day: number): string {
    if (this.daysSinceLastPeriod === null) return '';

    const currentCycleStart = this.parseDate(this.lastPeriodStart)!;
    const elapsedDays = this.daysSinceLastPeriod;
    currentCycleStart.setDate(
      currentCycleStart.getDate() + elapsedDays -
      (elapsedDays % this.cycleLength)
    );

    currentCycleStart.setDate(currentCycleStart.getDate() + day - 1);

    return this.formatDate(currentCycleStart);
  }

  private loadSettings(): void {
    const saved = localStorage.getItem(this.storageKey);

    if (!saved) return;

    try {
      const settings: CycleSettings = JSON.parse(saved);

      this.lastPeriodStart = settings.lastPeriodStart ?? '';
      this.cycleLength = Number(settings.cycleLength) || 28;
      this.periodLength = Number(settings.periodLength) || 5;
    } catch {
      this.lastPeriodStart = '';
    }
  }

  private getTodayKey(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  private parseDate(value: string): Date | null {
    const parts = value.split('-').map(Number);

    if (parts.length !== 3 || parts.some(Number.isNaN)) {
      return null;
    }

    return new Date(parts[0], parts[1] - 1, parts[2], 12);
  }

  private dateDifference(start: Date, end: Date): number {
    const startUtc = Date.UTC(
      start.getFullYear(),
      start.getMonth(),
      start.getDate()
    );

    const endUtc = Date.UTC(
      end.getFullYear(),
      end.getMonth(),
      end.getDate()
    );

    return Math.round((endUtc - startUtc) / 86400000);
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
    });
  }
}