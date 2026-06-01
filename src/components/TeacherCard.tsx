import React from 'react';
import { Mail, Phone, Edit2, Trash2 } from 'lucide-react';
import type { Teacher } from '../types';

interface TeacherCardProps {
  teacher: Teacher;
  onEdit: (teacher: Teacher) => void;
  onDelete: (id: string) => void;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={teacher.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(teacher.name)}&background=random`}
              alt={teacher.name}
              className="h-16 w-16 rounded-full object-cover border-2 border-gray-50"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
              <p className="text-sm font-medium text-blue-600">{teacher.subject}</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-1">
                {teacher.division}
              </span>
            </div>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => onEdit(teacher)}
              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              aria-label={`Edit ${teacher.name}`}
            >
              <Edit2 size={18} />
            </button>
            <button
              onClick={() => onDelete(teacher.id)}
              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              aria-label={`Delete ${teacher.name}`}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center text-sm text-gray-500">
            <Mail className="flex-shrink-0 mr-2 h-4 w-4" />
            <span className="truncate">{teacher.email}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Phone className="flex-shrink-0 mr-2 h-4 w-4" />
            <span>{teacher.phone}</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};
