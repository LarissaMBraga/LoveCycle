export interface CycleEntry {
  date: string;
  flow: 'none' | 'light' | 'medium' | 'heavy';
  symptoms: string[];
  mood: string;
  pain: number;
  notes: string;
}