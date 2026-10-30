import { Injectable, signal } from '@angular/core';
import { CycleEntry } from '../../features/calendar/models/cycle-entry';

@Injectable({
  providedIn: 'root'
})
export class CycleEntryService {
  private readonly storageKey = 'love-cycle-entries';

  entries = signal<CycleEntry[]>(this.loadEntries());

  private loadEntries(): CycleEntry[] {
    try {
      const saved = localStorage.getItem(this.storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  private saveEntries(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.entries()));
  }

  getEntry(date: string): CycleEntry | undefined {
    return this.entries().find(entry => entry.date === date);
  }

  saveEntry(entry: CycleEntry): void {
    this.entries.update(current => {
      const filtered = current.filter(item => item.date !== entry.date);
      return [...filtered, entry];
    });

    this.saveEntries();
  }

  deleteEntry(date: string): void {
    this.entries.update(current =>
      current.filter(entry => entry.date !== date)
    );

    this.saveEntries();
  }
}