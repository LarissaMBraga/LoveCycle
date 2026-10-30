import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

interface Note {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-notes',
  imports: [FormsModule, DatePipe],
  templateUrl: './notes.html',
  styleUrl: './notes.scss',
})
export class Notes {
  private readonly storageKey = 'love-cycle-notes';

  notes: Note[] = [];
  searchTerm = '';
  selectedCategory = 'Todas';
  showForm = false;
  editingId: number | null = null;

  title = '';
  content = '';
  category = 'Sentimentos';
  date = new Date().toISOString().slice(0, 10);

  readonly categories = [
    'Todas',
    'Sintomas',
    'Sentimentos',
    'Menstruação',
    'Saúde',
    'Outros',
  ];

  constructor() {
    this.loadNotes();
  }

  get filteredNotes(): Note[] {
    return this.notes
      .filter(note => {
        const matchesSearch =
          note.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          note.content.toLowerCase().includes(this.searchTerm.toLowerCase());

        const matchesCategory =
          this.selectedCategory === 'Todas' ||
          note.category === this.selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }

  openForm(): void {
    this.resetForm();
    this.showForm = true;
  }

  editNote(note: Note): void {
    this.editingId = note.id;
    this.title = note.title;
    this.content = note.content;
    this.category = note.category;
    this.date = note.date;
    this.showForm = true;
  }

  saveNote(): void {
    if (!this.title.trim() || !this.content.trim()) return;

    if (this.editingId !== null) {
      this.notes = this.notes.map(note =>
        note.id === this.editingId
          ? {
              ...note,
              title: this.title.trim(),
              content: this.content.trim(),
              category: this.category,
              date: this.date,
            }
          : note
      );
    } else {
      this.notes = [
        {
          id: Date.now(),
          title: this.title.trim(),
          content: this.content.trim(),
          category: this.category,
          date: this.date,
        },
        ...this.notes,
      ];
    }

    this.persistNotes();
    this.closeForm();
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.persistNotes();
  }

  closeForm(): void {
    this.showForm = false;
    this.resetForm();
  }

  private resetForm(): void {
    this.editingId = null;
    this.title = '';
    this.content = '';
    this.category = 'Sentimentos';
    this.date = new Date().toISOString().slice(0, 10);
  }

  private loadNotes(): void {
    const saved = localStorage.getItem(this.storageKey);
    this.notes = saved ? JSON.parse(saved) : [];
  }

  private persistNotes(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.notes));
  }
}