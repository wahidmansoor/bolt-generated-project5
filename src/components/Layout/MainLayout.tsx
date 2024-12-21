import React from 'react';
import Sidebar from './Sidebar';
import ChatArea from '../Chat/ChatArea';
import ToolPanel from './ToolPanel';
import ModuleSelector from './ModuleSelector';
import { Module } from '../../types';

export default function MainLayout() {
  const [selectedModule, setSelectedModule] = React.useState<Module>('outpatient');

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar selectedModule={selectedModule} />
      
      <main className="flex-1 flex flex-col min-w-0">
        <div className="border-b border-gray-200">
          <ModuleSelector 
            selectedModule={selectedModule}
            onModuleChange={setSelectedModule}
          />
        </div>
        
        <div className="flex-1 flex overflow-hidden">
          <ChatArea />
        </div>
      </main>

      <ToolPanel selectedModule={selectedModule} />
    </div>
  );
}
