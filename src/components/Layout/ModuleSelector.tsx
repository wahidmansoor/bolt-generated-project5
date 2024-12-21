import React from 'react';
import { Stethoscope, Pill, Building2, Heart } from 'lucide-react';
import { Module } from '../../types';

interface ModuleSelectorProps {
  selectedModule: Module;
  onModuleChange: (module: Module) => void;
}

const modules = [
  {
    id: 'outpatient' as Module,
    name: 'Oncology Outpatient',
    icon: Stethoscope,
  },
  {
    id: 'chemotherapy' as Module,
    name: 'Chemotherapy Day Unit',
    icon: Pill,
  },
  {
    id: 'inpatient' as Module,
    name: 'Inpatient Oncology',
    icon: Building2,
  },
  {
    id: 'palliative' as Module,
    name: 'Palliative Care',
    icon: Heart,
  },
];

export default function ModuleSelector({ selectedModule, onModuleChange }: ModuleSelectorProps) {
  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-white">
      {modules.map((module) => {
        const Icon = module.icon;
        const isSelected = selectedModule === module.id;
        
        return (
          <button
            key={module.id}
            onClick={() => onModuleChange(module.id)}
            className={`flex items-center justify-center p-6 rounded-xl transition-all duration-200
              ${isSelected 
                ? 'bg-blue-500 text-white shadow-lg scale-105 transform hover:bg-blue-600' 
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
              }`}
          >
            <div className="flex flex-col items-center space-y-3">
              <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-blue-500'}`} />
              <span className="text-sm font-medium text-center">{module.name}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
