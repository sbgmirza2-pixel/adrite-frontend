import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend 
} from 'recharts';

const Dashboard = () => {
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
    <div className="space-y-6 md:space-y-8 font-inter">
      
      {/* 1. Summary Cards - Stack on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-[#1E293B] p-5 md:p-6 rounded-[20px] md:rounded-[24px] border border-slate-700 shadow-xl">
          <p className="text-[#64748B] text-[10px] md:text-xs font-bold uppercase tracking-widest">Total Revenue</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 md:mt-2">$24,500</h3>
          <span className="text-green-500 text-[10px] md:text-xs font-bold">+12% from last month</span>
        </div>
        
        <div className="bg-[#1E293B] p-5 md:p-6 rounded-[20px] md:rounded-[24px] border border-slate-700 shadow-xl">
          <p className="text-[#64748B] text-[10px] md:text-xs font-bold uppercase tracking-widest">Active Projects</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 md:mt-2">12</h3>
          <span className="text-[#F59E0B] text-[10px] md:text-xs font-bold">5 Pending review</span>
        </div>
        
        {/* Is card ko mobile par full width dene ke liye 'sm:col-span-2 lg:col-span-1' use kiya hai */}
        <div className="bg-[#1E293B] p-5 md:p-6 rounded-[20px] md:rounded-[24px] border border-slate-700 shadow-xl sm:col-span-2 lg:col-span-1">
          <p className="text-[#64748B] text-[10px] md:text-xs font-bold uppercase tracking-widest">Global Clients</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 md:mt-2">156</h3>
          <span className="text-blue-400 text-[10px] md:text-xs font-bold">USA, UK, UAE</span>
        </div>
      </div>

      {/* 2. Charts Row - Stack on mobile and tablets, side-by-side on large desktops */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        
        {/* Revenue Area Chart */}
        <div className="bg-white p-5 md:p-8 rounded-[20px] md:rounded-[24px] shadow-xl border border-slate-100">
          <h4 className="text-[#0F172A] text-sm md:text-base font-bold mb-4 md:mb-6 font-poppins">Monthly Revenue Analysis</h4>
          <div className="h-[250px] md:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 10}} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#F59E0B" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Distribution Pie Chart */}
        <div className="bg-white p-5 md:p-8 rounded-[20px] md:rounded-[24px] shadow-xl border border-slate-100">
          <h4 className="text-[#0F172A] text-sm md:text-base font-bold mb-4 md:mb-6 font-poppins">User Distribution</h4>
          <div className="h-[250px] md:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userData}
                  innerRadius="50%"
                  outerRadius="80%"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  iconType="circle" 
                  layout="horizontal" 
                  align="center" 
                  verticalAlign="bottom"
                  wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;