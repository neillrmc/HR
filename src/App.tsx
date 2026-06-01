import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TeacherList } from './components/TeacherList';
import { TeacherModal } from './components/TeacherModal';
import type { Teacher } from './types';
import { initialTeachers } from './mockData';

function App() {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDivision = selectedDivision === 'All' || teacher.division === selectedDivision;

      return matchesSearch && matchesDivision;
    });
  }, [teachers, searchTerm, selectedDivision]);

  const handleAddTeacher = () => {
    setEditingTeacher(null);
    setIsModalOpen(true);
  };

  const handleEditTeacher = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setIsModalOpen(true);
  };

  const handleDeleteTeacher = (id: string) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      setTeachers(teachers.filter((t) => t.id !== id));
    }
  };

  const handleSaveTeacher = (teacherData: Omit<Teacher, 'id'> & { id?: string }) => {
    if (teacherData.id) {
      // Edit
      setTeachers(teachers.map((t) => (t.id === teacherData.id ? (teacherData as Teacher) : t)));
    } else {
      // Add
      const newTeacher: Teacher = {
        ...teacherData,
        id: Math.random().toString(36).substr(2, 9),
      };
      setTeachers([...teachers, newTeacher]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddTeacher={handleAddTeacher} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedDivision={selectedDivision}
          onDivisionChange={setSelectedDivision}
        />

        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedDivision === 'All' ? 'All Teachers' : `${selectedDivision} Teachers`}
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({filteredTeachers.length} found)
            </span>
          </h2>
        </div>

        <TeacherList
          teachers={filteredTeachers}
          onEditTeacher={handleEditTeacher}
          onDeleteTeacher={handleDeleteTeacher}
        />
      </main>

      <TeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTeacher}
        teacher={editingTeacher}
      />
    </div>
  );
}

export default App;
