import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Module } from '../../types';

interface SidebarProps {
  selectedModule: Module;
}

const questions = {
  outpatient: [
    { category: 'Initial Assessment', items: ['Treatment Planning', 'Side Effects', 'Follow-up Schedule'] },
    { category: 'Protocol Selection', items: ['First-line Treatment', 'Second-line Options', 'Clinical Trials'] },
  ],
  chemotherapy: [
    { category: 'Pre-medication', items: ['Anti-emetics', 'Hydration Protocol', 'Supportive Care'] },
    { category: 'Administration', items: ['Infusion Rates', 'Monitoring Parameters', 'Emergency Protocols'] },
  ],
  inpatient: [
    { category: 'Admission Criteria', items: ['Emergency Admission', 'Planned Admission', 'ICU Transfer'] },
    { category: 'Daily Management', items: ['Pain Control', 'Nutrition Support', 'Infection Management'] },
  ],
  palliative: [
    { category: 'Symptom Management', items: ['Pain Assessment', 'Breathlessness', 'End of Life Care'] },
    { category: 'Support Services', items: ['Family Support', 'Psychological Care', 'Spiritual Care'] },
  ],
};

export default function Sidebar({ selectedModule }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Access</h2>
        
        <div className="space-y-4">
          {questions[selectedModule].map((category) => {
            const isExpanded = expandedCategories.includes(category.category);
            
            return (
              <div key={category.category} className="rounded-lg bg-gray-50">
                <button 
                  onClick={() => toggleCategory(category.category)}
                  className="flex items-center justify-between w-full p-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="text-base">{category.category}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="px-4 pb-4 space-y-2">
                    {category.items.map((item) => (
                      <button
                        key={item}
                        className="block w-full text-left py-2 px-4 text-sm text-gray-600 hover:bg-white hover:text-blue-500 rounded-md transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
