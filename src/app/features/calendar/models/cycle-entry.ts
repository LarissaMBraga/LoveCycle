export type FlowLevel = 'none' | 'light' | 'medium' | 'heavy';

export type SexualActivity = 'yes' | 'no';

export type ProtectionMethod =
  | 'condom'
  | 'no-condom'
  | 'other'
  | 'prefer-not-to-say';

export type ContraceptiveStatus =
  | 'taken'
  | 'missed'
  | 'not-used';

export interface CycleEntry {
  date: string;
  flow: FlowLevel;
  symptoms: string[];
  mood: string;
  pain: number;
  notes: string;
  sexualActivity?: SexualActivity;
  protectionMethod?: ProtectionMethod;
  contraceptiveStatus?: ContraceptiveStatus;
}