import React from 'react';
import { Plus, Users } from 'lucide-react';

interface HeaderProps {
  onAddTeacher: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddTeacher }) => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Users size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Division Teacher Directory</h1>
        </div>
        <button
          onClick={onAddTeacher}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          aria-label="Add new teacher"
        >
          <Plus className="mr-2" size={20} />
          Add Teacher
        </button>
      </div>
    </header>
  );
};
