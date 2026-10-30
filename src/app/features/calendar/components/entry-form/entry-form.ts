import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CycleEntry } from '../../models/cycle-entry';

@Component({
  selector: 'app-entry-form',
  imports: [FormsModule],
  templateUrl: './entry-form.html',
  styleUrl: './entry-form.scss'
})
export class EntryForm implements OnChanges {
  @Input() date = '';
  @Input() initialEntry?: CycleEntry;

  @Output() saved = new EventEmitter<CycleEntry>();
  @Output() cancelled = new EventEmitter<void>();

  flow: CycleEntry['flow'] = 'none';
  symptoms: string[] = [];
  mood = '';
  pain = 0;
  notes = '';

  sexualActivity: CycleEntry['sexualActivity'] = 'no';
  protectionMethod: CycleEntry['protectionMethod'] | '' = '';
  contraceptiveStatus: CycleEntry['contraceptiveStatus'] | '' = '';

  readonly flowOptions = [
    { value: 'none', label: 'Nenhum', emoji: '○' },
    { value: 'light', label: 'Leve', emoji: '🩸' },
    { value: 'medium', label: 'Moderado', emoji: '🩸🩸' },
    { value: 'heavy', label: 'Intenso', emoji: '🩸🩸🩸' }
  ];

  readonly symptomOptions = [
    'Cólicas',
    'Dor de cabeça',
    'Inchaço',
    'Acne',
    'Cansaço',
    'Sensibilidade nos seios',
    'Alteração de apetite',
    'Insônia',
    'Náusea',
    'Tontura',
    'Dor lombar',
    'Alterações intestinais',
    'Seios doloridos',
    'Dor muscular',
    'Constipação',
    'Diarreia',
    'Aumento da libido',
    'Corrimento vaginal'
  ];

  readonly moodOptions = [
    { value: 'Feliz', emoji: '😊' },
    { value: 'Tranquila', emoji: '😌' },
    { value: 'Carinhosa', emoji: '🥰' },
    { value: 'Neutra', emoji: '😐' },
    { value: 'Ansiosa', emoji: '😰' },
    { value: 'Irritada', emoji: '😤' },
    { value: 'Triste', emoji: '😢' },
    { value: 'Sensível', emoji: '🥺' },
    { value: 'Cansada', emoji: '😴' },
    { value: 'Animada', emoji: '✨' }
  ];

  ngOnChanges(): void {
    this.flow = this.initialEntry?.flow ?? 'none';
    this.symptoms = [...(this.initialEntry?.symptoms ?? [])];
    this.mood = this.initialEntry?.mood ?? '';
    this.pain = this.initialEntry?.pain ?? 0;
    this.notes = this.initialEntry?.notes ?? '';

    this.sexualActivity = this.initialEntry?.sexualActivity ?? 'no';
    this.protectionMethod = this.initialEntry?.protectionMethod ?? '';
    this.contraceptiveStatus = this.initialEntry?.contraceptiveStatus ?? '';
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
    pain: Number(this.pain),
    notes: this.notes,
    sexualActivity: this.sexualActivity,
    protectionMethod:
      this.sexualActivity === 'yes' && this.protectionMethod
        ? this.protectionMethod
        : undefined,
    contraceptiveStatus: this.contraceptiveStatus || undefined
  });
}
}