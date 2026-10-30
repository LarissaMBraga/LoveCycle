import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cycle',
  imports: [FormsModule, DatePipe],
  templateUrl: './cycle.html',
  styleUrl: './cycle.scss',
})
export class Cycle {
  private readonly storageKey = 'love-cycle-settings';

  lastPeriodStart = '';
  cycleLength = 28;
  periodLength = 5;
  saved = false;

  constructor() {
    this.loadSettings();
  }

  get nextPeriod(): string {
    if (!this.lastPeriodStart) return '';

    const date = new Date(`${this.lastPeriodStart}T12:00:00`);
    date.setDate(date.getDate() + Number(this.cycleLength));

    return date.toLocaleDateString('pt-BR');
  }

  get remainingDays(): number | null {
    if (!this.lastPeriodStart) return null;

    const start = new Date(`${this.lastPeriodStart}T12:00:00`);
    start.setDate(start.getDate() + Number(this.cycleLength));

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return Math.ceil((start.getTime() - today.getTime()) / 86400000);
  }

  saveSettings(): void {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify({
        lastPeriodStart: this.lastPeriodStart,
        cycleLength: this.cycleLength,
        periodLength: this.periodLength,
      })
    );

    this.saved = true;
  }

  private loadSettings(): void {
    const saved = localStorage.getItem(this.storageKey);

    if (!saved) return;

    const settings = JSON.parse(saved);

    this.lastPeriodStart = settings.lastPeriodStart ?? '';
    this.cycleLength = settings.cycleLength ?? 28;
    this.periodLength = settings.periodLength ?? 5;
  }
}