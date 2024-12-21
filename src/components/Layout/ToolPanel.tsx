import React from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { Module } from '../../types';

interface ToolPanelProps {
  selectedModule: Module;
}

const calculators = {
  outpatient: [
    { name: 'BSA Calculator', description: 'Body Surface Area calculation' },
    { name: 'Dose Adjustment', description: 'Based on organ function' },
  ],
  chemotherapy: [
    { name: 'Infusion Rate', description: 'Calculate drip rates' },
    { name: 'Cumulative Dose', description: 'Track total chemotherapy exposure' },
  ],
  inpatient: [
    { name: 'MASCC Score', description: 'Febrile neutropenia risk' },
    { name: 'Fluid Balance', description: 'Input/Output calculator' },
  ],
  palliative: [
    { name: 'Opioid Converter', description: 'Convert between different opioids' },
    { name: 'PPS Scale', description: 'Palliative Performance Scale' },
  ],
};

export default function ToolPanel({ selectedModule }: ToolPanelProps) {
  return (
    <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Calculators</h2>
        
        <div className="space-y-4">
          {calculators[selectedModule].map((calc) => (
            <button
              key={calc.name}
              className="w-full p-4 flex items-start space-x-4 text-left bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
            >
              <div className="mt-1 p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Calculator className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{calc.name}</h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <p className="text-sm text-gray-500 mt-1">{calc.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
