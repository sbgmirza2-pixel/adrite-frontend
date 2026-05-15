const ClientProjectTracking = () => {
  const milestones = [
    { title: "UI/UX & Wireframing", date: "May 02, 2026", status: "Completed", color: "bg-emerald-500", text: "text-emerald-400" },
    { title: "Frontend Architecture & Layouts", date: "May 10, 2026", status: "Completed", color: "bg-emerald-500", text: "text-emerald-400" },
    { title: "Client & Admin Workspace Integration", date: "May 14, 2026", status: "In Progress", color: "bg-amber-500", text: "text-amber-400" },
    { title: "Final API Connection & Deployment", date: "May 20, 2026", status: "Pending", color: "bg-slate-700", text: "text-slate-500" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Project Tracking</h1>
        <p className="text-sm text-slate-400">Monitor live updates and roadmap milestones of your active contracts.</p>
      </div>

      {/* Project Card */}
      <div className="bg-[#0F172A]/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold text-white">Adrite Agency Management Portal</h2>
            <p className="text-xs text-slate-500 mt-1">ID: #PROJ-2026-ADR</p>
          </div>
          <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full font-bold">
            Phase 3: Integration
          </span>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-4 space-y-8 pb-4">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-8">
              {/* Timeline Dot */}
              <span className={`absolute -left-2 top-1.5 h-4 w-4 rounded-full border-4 border-[#090D16] ${m.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></span>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-slate-900/30 border border-slate-800/40 p-4 rounded-xl hover:border-slate-700 transition-all">
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">{m.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Target Date: {m.date}</p>
                </div>
                <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-slate-900/60 border border-slate-800 ${m.text}`}>
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientProjectTracking;