import React from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50 p-6">
      <div className="flex-1 overflow-y-auto mb-6 space-y-6">
        {/* Welcome message */}
        <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
          <p className="text-gray-700 text-lg">
            Welcome to the Oncology Assistant. How can I help you today?
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
