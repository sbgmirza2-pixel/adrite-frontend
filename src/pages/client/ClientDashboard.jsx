import { useState, useEffect } from 'react';
import axios from 'axios';

const ClientDashboard = () => {
  // Live states for data fetched from Ifrah's backend
  const [liveData, setLiveData] = useState({
    activeProjects: "02", // Fallback defaults
    pendingInvoices: "01",
    completedMilestones: "14",
    outstandingBalance: "1,250.00",
    projectName: "Adrite Agency Management Portal",
    progressPercent: 75
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientDashboardData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        
        // Headers mein token bhej rahe hain security ke liye
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        // Ifrah ka exact endpoint yahan aayega (e.g., /client/dashboard-summary)
        const response = await axios.get(`${backendUrl}/client/dashboard-summary`, config);
        
        if (response.data) {
          setLiveData({
            activeProjects: response.data.activeProjects || "02",
            pendingInvoices: response.data.pendingInvoices || "01",
            completedMilestones: response.data.completedMilestones || "14",
            outstandingBalance: response.data.outstandingBalance || "1,250.00",
            projectName: response.data.projectName || "Adrite Agency Management Portal",
            progressPercent: response.data.progressPercent || 75
          });
        }
      } catch (error) {
        console.error("Backend integration error, switching to offline preview:", error);
        // Error aane par page white nahi hoga, fallback data chalta rahega!
      } finally {
        setLoading(false);
      }
    };

    fetchClientDashboardData();
  }, []);

  const cards = [
    { title: "Active Projects", value: liveData.activeProjects, desc: "Development Phase", icon: "📦", color: "from-blue-500/20 to-indigo-500/5", border: "border-blue-500/30", text: "text-blue-400" },
    { title: "Pending Invoices", value: liveData.pendingInvoices, desc: "Awaiting Clearance", icon: "💰", color: "from-amber-500/20 to-orange-500/5", border: "border-amber-500/30", text: "text-amber-500" },
    { title: "Completed Milestones", value: liveData.completedMilestones, desc: "Delivered Successfully", icon: "✅", color: "from-emerald-500/20 to-teal-500/5", border: "border-emerald-500/30", text: "text-emerald-400" },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1.5">System Overview</h1>
        <p className="text-xs md:text-sm text-slate-400">Real-time tracking of your ecosystem and billing details.</p>
      </div>
      
      {/* Premium Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card, i) => (
          <div 
            key={i} 
            className={`bg-gradient-to-br ${card.color} ${card.border} border rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-lg flex justify-between items-start`}
          >
            <div>
              <p className="text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{card.title}</p>
              <p className={`text-3xl md:text-4xl font-bold tracking-tight ${card.text} mb-1`}>{card.value}</p>
              <p className="text-[11px] md:text-xs text-slate-500">{card.desc}</p>
            </div>
            <div className="text-xl md:text-2xl p-2 bg-slate-900/40 rounded-xl border border-slate-800/50">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Live Progress & Recent Statements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Project Progress Section */}
        <div className="lg:col-span-2 bg-[#0F172A]/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
            <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-2">⏱️ Current Project Deliverables</h3>
            <span className="w-max text-[9px] md:text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-bold">In Progress</span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-xs md:text-sm mb-2">
                <span className="font-semibold text-slate-300">{liveData.projectName}</span>
                <span className="w-max font-mono text-[11px] text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">{liveData.progressPercent}% Complete</span>
              </div>
              <div className="w-full bg-slate-800/60 h-2.5 rounded-full p-0.5 border border-slate-700/30 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-1.5 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.4)]" style={{ width: `${liveData.progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          {/* Dummy Logs */}
          <div className="mt-6 md:mt-8 border-t border-slate-800/60 pt-4 space-y-3">
            <p className="text-xs text-slate-400 font-medium">Latest Milestones:</p>
            <div className="text-[11px] md:text-xs text-slate-500 flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">●</span> 
              <span>Core Frontend Architecture Setup — <span className="text-slate-400 font-medium">Passed</span></span>
            </div>
            <div className="text-[11px] md:text-xs text-slate-500 flex items-start gap-2">
              <span className="text-emerald-400 mt-0.5">●</span> 
              <span>Admin / Client Dashboard Views Separation — <span className="text-slate-400 font-medium">Passed</span></span>
            </div>
          </div>
        </div>

        {/* Invoice Summary Card */}
        <div className="bg-[#0F172A]/40 border border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-xl backdrop-blur-md flex flex-col justify-between gap-6">
          <div>
            <h3 className="text-sm md:text-base font-bold text-white mb-4">💳 Quick Billing Info</h3>
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-center">
              <p className="text-[11px] md:text-xs text-slate-400 mb-1">Outstanding Balance</p>
              <p className="text-xl md:text-2xl font-extrabold text-white font-mono">${liveData.outstandingBalance}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] md:text-xs text-slate-400">
              <span>Invoice ID:</span>
              <span className="font-mono text-slate-200">#INV-2026-004</span>
            </div>
            <div className="flex justify-between text-[11px] md:text-xs text-slate-400">
              <span>Due Date:</span>
              <span className="text-amber-500 font-medium">May 25, 2026</span>
            </div>
            <button className="w-full mt-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white text-slate-300 font-semibold py-2.5 rounded-xl text-xs transition-all">
              Review Statement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;