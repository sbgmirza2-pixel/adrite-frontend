import React from 'react';

const ClientDashboard = () => {
  const activeProjects = [
    { id: 1, name: "Social Media Campaign", status: "In Progress", progress: 65 },
    { id: 2, name: "Brand Identity Design", status: "Reviewing", progress: 90 }
  ];

  return (
    <div className="p-4 md:p-8 font-inter bg-slate-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-poppins font-bold text-[#0F172A]">
          Welcome Back, <span className="text-[#F59E0B]">Client!</span>
        </h1>
        <p className="text-slate-500 text-sm">Here's what's happening with your projects at Adrite.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Status Cards */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0F172A] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F59E0B] rounded-full"></span>
              Active Projects
            </h3>
            <div className="space-y-4">
              {activeProjects.map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-center mb-3">
                    <p className="font-bold text-slate-700">{proj.name}</p>
                    <span className="text-[10px] bg-orange-100 text-[#F59E0B] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {proj.status}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#0F172A] h-full transition-all duration-500" 
                      style={{ width: `${proj.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2 text-right">{proj.progress}% Complete</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <button className="p-6 bg-[#0F172A] text-white rounded-[32px] font-bold hover:bg-slate-800 transition-all">
              Request New Task
            </button>
            <button className="p-6 bg-white border-2 border-[#0F172A] text-[#0F172A] rounded-[32px] font-bold hover:bg-slate-50 transition-all">
              View All Invoices
            </button>
          </div>
        </div>

        {/* Sidebar - Support & AI History */}
        <div className="space-y-6">
          <div className="bg-[#F59E0B] p-6 rounded-[32px] text-[#0F172A]">
            <h3 className="font-bold mb-2">Need Help?</h3>
            <p className="text-sm opacity-80 mb-4">Contact your account manager for any queries.</p>
            <button className="w-full py-3 bg-[#0F172A] text-white rounded-2xl font-bold text-sm">
              Open Support Ticket
            </button>
          </div>

          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#0F172A] mb-4 text-sm uppercase tracking-widest">Recent AI Assets</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-slate-100 rounded-xl"></div>
              <div className="aspect-square bg-slate-100 rounded-xl"></div>
              <div className="aspect-square bg-slate-100 rounded-xl"></div>
              <div className="aspect-square bg-slate-100 rounded-xl"></div>
            </div>
            <button className="w-full mt-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:text-[#F59E0B]">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;