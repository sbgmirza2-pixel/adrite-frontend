import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialData = {
  projects: [
    { id: 'p1', content: 'Design Adrite Landing Page' },
    { id: 'p2', content: 'Fix API Authentication' },
  ],
  interns: [
    { id: 'i1', name: 'Zia Ullah Khan', assigned: [] },
    { id: 'i2', name: 'Shahab Uddin', assigned: [] },
  ],
};

const ProjectAssignment = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    const newProject = {
      id: `p-${Date.now()}`,
      content: projectName
    };

    setData({
      ...data,
      projects: [newProject, ...data.projects]
    });

    setProjectName("");
    setIsModalOpen(false);
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    if (source.droppableId === 'projects-list' && destination.droppableId.startsWith('intern-')) {
      const internId = destination.droppableId.split('intern-')[1];
      const project = data.projects.find(p => p.id === draggableId);

      const newProjects = data.projects.filter(p => p.id !== draggableId);
      const newInterns = data.interns.map(intern => {
        if (intern.id === internId) {
          return { ...intern, assigned: [...intern.assigned, project] };
        }
        return intern;
      });

      setData({ projects: newProjects, interns: newInterns });
    }
  };

  return (
    <div className="p-2 md:p-4 font-inter">
      {/* Header Section - Stack on very small screens */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-poppins font-bold text-[#0F172A]">
          Project <span className="text-[#F59E0B]">Assignment</span>
        </h1>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto bg-[#0F172A] text-white px-6 py-3 rounded-[12px] font-bold hover:bg-[#1E293B] shadow-lg transition-all flex justify-center items-center gap-2"
        >
          <span className="text-[#F59E0B] text-xl">+</span> Add Project
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Pending Projects Column */}
          <div className="bg-white p-5 md:p-6 rounded-[20px] md:rounded-[24px] shadow-xl border border-slate-200">
            <h2 className="text-xs md:text-sm font-bold text-[#64748B] uppercase tracking-widest mb-6">Pending Pool</h2>
            <Droppable droppableId="projects-list">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4 min-h-[200px] md:min-h-[400px]">
                  {data.projects.map((project, index) => (
                    <Draggable key={project.id} draggableId={project.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-[#0F172A] text-white p-4 rounded-[12px] shadow-md border-l-4 border-[#F59E0B] hover:bg-[#1e293b] cursor-grab active:cursor-grabbing text-sm md:text-base"
                        >
                          {project.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* Interns Column - 1 col on mobile, 2 on tablet/desktop */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-fit">
            {data.interns.map((intern) => (
              <div key={intern.id} className="bg-[#1E293B] p-5 md:p-6 rounded-[20px] md:rounded-[24px] shadow-xl border border-slate-700">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm md:text-base">
                   {intern.name}
                </h3>
                <Droppable droppableId={`intern-${intern.id}`}>
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="bg-[#0F172A]/50 p-4 rounded-[16px] border-2 border-dashed border-slate-600 min-h-[120px] md:min-h-[150px] space-y-3"
                    >
                      {intern.assigned.map((proj) => (
                        <div key={proj.id} className="bg-[#F59E0B] text-[#0F172A] p-3 rounded-[10px] text-xs md:text-sm font-bold shadow-sm">
                          {proj.content}
                        </div>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </div>
      </DragDropContext>

      {/* ADD PROJECT MODAL - Fully Responsive */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white p-6 md:p-8 rounded-[20px] md:rounded-[24px] shadow-2xl w-full max-w-md border border-slate-200">
            <h2 className="text-xl md:text-2xl font-poppins font-bold text-[#0F172A] mb-6">Create New Project</h2>
            <form onSubmit={handleAddProject}>
              <div className="mb-6">
                <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest ml-1">Project Title</label>
                <input 
                  autoFocus
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] p-3 md:p-4 rounded-[12px] md:rounded-[15px] mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none transition-all text-sm"
                  placeholder="e.g. Website Maintenance"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required 
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="order-2 sm:order-1 flex-1 bg-slate-100 text-slate-500 p-3 md:p-4 rounded-[12px] md:rounded-[15px] font-bold hover:bg-slate-200 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="order-1 sm:order-2 flex-1 bg-[#F59E0B] text-[#0F172A] p-3 md:p-4 rounded-[12px] md:rounded-[15px] font-bold hover:bg-[#D97706] shadow-lg transition-colors text-sm"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAssignment;