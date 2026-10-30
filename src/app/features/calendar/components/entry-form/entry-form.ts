
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CycleEntry } from '../../models/cycle-entry';

@Component({
  selector: 'app-entry-form',
  imports: [FormsModule],
  templateUrl: './entry-form.html',
  styleUrl: './entry-form.scss'
})
export class EntryForm {
  @Input() date = '';
  @Input() initialEntry?: CycleEntry;
  @Output() saved = new EventEmitter<CycleEntry>();
  @Output() cancelled = new EventEmitter<void>();

  flow: CycleEntry['flow'] = 'none';
  symptoms: string[] = [];
  mood = '';
  pain = 0;
  notes = '';

  readonly symptomOptions = [
    'Cólicas',
    'Dor de cabeça',
    'Inchaço',
    'Acne',
    'Cansaço',
    'Sensibilidade nos seios',
    'Alteração de apetite',
    'Insônia'
  ];

  readonly moodOptions = [
    'Feliz',
    'Tranquila',
    'Ansiosa',
    'Irritada',
    'Triste',
    'Sensível'
  ];

  ngOnChanges(): void {
    this.flow = this.initialEntry?.flow ?? 'none';
    this.symptoms = [...(this.initialEntry?.symptoms ?? [])];
    this.mood = this.initialEntry?.mood ?? '';
    this.pain = this.initialEntry?.pain ?? 0;
    this.notes = this.initialEntry?.notes ?? '';
  }

  toggleSymptom(symptom: string): void {
    this.symptoms = this.symptoms.includes(symptom)
      ? this.symptoms.filter(item => item !== symptom)
      : [...this.symptoms, symptom];
  }

  submit(): void {
    this.saved.emit({
      date: this.date,
      flow: this.flow,
      symptoms: this.symptoms,
      mood: this.mood,
      pain: this.pain,
      notes: this.notes
    });
  }
}
