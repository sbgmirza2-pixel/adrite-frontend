import React from 'react';

const ProjectTracking = () => {
  const projects = [
    { id: 1, name: "Adrite Website Redesign", intern: "Ali Khan", progress: 75, status: "In Progress", priority: "High", deadline: "15 May" },
    { id: 2, name: "SEO Optimization", intern: "Sara Ahmed", progress: 40, status: "Review", priority: "Medium", deadline: "20 May" },
    { id: 3, name: "Mobile App Backend", intern: "Zain Raza", progress: 90, status: "Near Completion", priority: "High", deadline: "12 May" },
    { id: 4, name: "Social Media Graphics", intern: "Hamza Ali", progress: 20, status: "Started", priority: "Low", deadline: "25 May" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'text-blue-500 bg-blue-50';
      case 'Review': return 'text-orange-500 bg-orange-50';
      case 'Near Completion': return 'text-green-500 bg-green-50';
      default: return 'text-slate-500 bg-slate-50';
    }
  };

  return (
    <div className="p-2 md:p-6 font-inter">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-poppins font-bold text-[#0F172A]">
            Project <span className="text-[#F59E0B]">Tracking</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">Monitor all ongoing agency projects</p>
        </div>
        <button className="mt-4 md:mt-0 bg-[#0F172A] text-white px-6 py-3 rounded-[12px] font-bold text-sm hover:shadow-lg transition-all">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-200 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className={`text-[10px] font-bold ${project.priority === 'High' ? 'text-red-500' : 'text-slate-400'}`}>
                {project.priority} PRIORITY
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#0F172A] mb-1">{project.name}</h3>
            <p className="text-slate-400 text-xs mb-6">Assignee: <span className="text-[#0F172A] font-medium">{project.intern}</span></p>

            {/* Progress Bar */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-500">Progress</span>
                <span className="text-[#0F172A]">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#F59E0B] h-full transition-all duration-500" 
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Deadline</span>
                <span className="text-sm font-bold text-[#0F172A]">{project.deadline}</span>
              </div>
              <button className="text-[#F59E0B] text-sm font-bold hover:underline">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTracking;