export type Module = 'outpatient' | 'chemotherapy' | 'inpatient' | 'palliative';

export interface Question {
  id: string;
  text: string;
  module: Module;
  category: string;
}

export interface Calculator {
  id: string;
  name: string;
  module: Module;
  description: string;
}
