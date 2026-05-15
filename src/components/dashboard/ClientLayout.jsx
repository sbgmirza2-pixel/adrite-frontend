import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const ClientLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const menuItems = [
    { path: '/client', label: 'Overview', icon: '📊' },
    { path: '/client/tracking', label: 'Project Tracking', icon: '🚀' },
    { path: '/client/invoices', label: 'Invoices & Billing', icon: '💳' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#090D16] font-sans antialiased text-slate-200 relative overflow-x-hidden">
      
      {/* 📱 Mobile Top Navbar */}
      <header className="flex md:hidden items-center justify-between px-6 h-16 bg-[#0F172A] border-b border-slate-800/60 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-black text-[#090D16] text-sm shadow-md">
            A
          </div>
          <span className="text-sm font-bold tracking-tight text-white">ADRITE CLIENT</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-lg text-xl"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* 📱 Mobile Dropdown Menu Panel (No Overlays, Absolute Fixed Height) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#0F172A] border-b border-slate-800 px-6 pb-6 flex flex-col z-40 shadow-2xl">
          <nav className="mt-4 space-y-1.5">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/10 to-transparent border-l-2 border-amber-500 text-amber-500 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile User Profile & Proper Logout Button */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-[#F59E0B] text-[#0F172A] flex items-center justify-center font-bold text-xs">
                C
              </div>
              <span className="text-xs font-semibold text-white">Client Acct</span>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-[#EF4444] hover:bg-red-600 text-white px-4 py-1.5 rounded-[6px] text-[11px] font-bold transition-all active:scale-95"
            >
              LOGOUT
            </button>
          </div>
        </div>
      )}

      {/* 💻 Desktop Sidebar (Bina bura scrollbar dikhaye) */}
      <aside className="hidden md:flex w-64 bg-[#0F172A]/60 backdrop-blur-xl border-r border-slate-800/60 p-6 flex flex-col justify-between sticky top-0 h-screen shrink-0 overflow-hidden">
        <div>
          {/* Logo Brand */}
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-black text-[#090D16] text-lg shadow-lg shadow-orange-500/20">
              A
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-white">ADRITE</h1>
              <p className="text-[10px] text-amber-500 font-semibold tracking-widest uppercase">Client Portal</p>
            </div>
          </div>
          
          {/* Navigation Links */}
          <nav className="space-y-1.5 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/10 to-transparent border-l-2 border-amber-500 text-amber-500 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop User Info & Logout 🚪 */}
        <div className="border-t border-slate-800/80 pt-4 px-2 flex items-center justify-between bg-[#0F172A]/10">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-white">
              C
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Client Acct</p>
              <p className="text-[10px] text-slate-500">Active Session</p>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            className="p-2 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-all duration-150 font-bold"
            title="Logout"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        {/* Desktop Only Header */}
        <header className="hidden md:flex h-16 border-b border-slate-800/40 bg-[#090D16]/80 backdrop-blur-md items-center justify-between px-8 z-10 shrink-0">
          <h2 className="text-sm font-medium text-slate-400">Workspace / <span className="text-slate-200 font-semibold">Client View</span></h2>
          <div className="flex items-center gap-4">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-slate-400 font-medium">Server Live</span>
          </div>
        </header>

        {/* Content Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;