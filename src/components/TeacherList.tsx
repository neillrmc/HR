import React from 'react';
import type { Teacher } from '../types';
import { TeacherCard } from './TeacherCard';

interface TeacherListProps {
  teachers: Teacher[];
  onEditTeacher: (teacher: Teacher) => void;
  onDeleteTeacher: (id: string) => void;
}

export const TeacherList: React.FC<TeacherListProps> = ({
  teachers,
  onEditTeacher,
  onDeleteTeacher,
}) => {
  if (teachers.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No teachers found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          teacher={teacher}
          onEdit={onEditTeacher}
          onDelete={onDeleteTeacher}
        />
      ))}
    </div>
  );
};
