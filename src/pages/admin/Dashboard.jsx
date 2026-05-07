import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend 
} from 'recharts';

const Dashboard = () => {
  // Dummy Data for Charts
  const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
  ];

  const userData = [
    { name: 'Clients', value: 400 },
    { name: 'Interns', value: 300 },
    { name: 'Admins', value: 50 },
  ];

  const COLORS = ['#F59E0B', '#10B981', '#3B82F6'];

  return (
    <div className="space-y-8 font-inter">
      {/* 1. Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E293B] p-6 rounded-[24px] border border-slate-700 shadow-xl">
          <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest">Total Revenue</p>
          <h3 className="text-3xl font-bold text-white mt-2">$24,500</h3>
          <span className="text-green-500 text-xs font-bold">+12% from last month</span>
        </div>
        <div className="bg-[#1E293B] p-6 rounded-[24px] border border-slate-700 shadow-xl">
          <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest">Active Projects</p>
          <h3 className="text-3xl font-bold text-white mt-2">12</h3>
          <span className="text-[#F59E0B] text-xs font-bold">5 Pending review</span>
        </div>
        <div className="bg-[#1E293B] p-6 rounded-[24px] border border-slate-700 shadow-xl">
          <p className="text-[#64748B] text-xs font-bold uppercase tracking-widest">Global Clients</p>
          <h3 className="text-3xl font-bold text-white mt-2">156</h3>
          <span className="text-blue-400 text-xs font-bold">USA, UK, UAE</span>
        </div>
      </div>

      {/* 2. Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Revenue Area Chart */}
        <div className="bg-white p-8 rounded-[24px] shadow-xl border border-slate-100">
          <h4 className="text-[#0F172A] font-bold mb-6 font-poppins">Monthly Revenue Analysis</h4>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Distribution Pie Chart */}
        <div className="bg-white p-8 rounded-[24px] shadow-xl border border-slate-100">
          <h4 className="text-[#0F172A] font-bold mb-6 font-poppins">User Distribution</h4>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userData}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" layout="vertical" align="right" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;