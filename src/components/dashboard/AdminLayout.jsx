import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("access_token");
    localStorage.setItem("role", "");
    navigate('/login');
  };

  const currentPath = location.pathname;

  // Sidebar Links - Added Invoices for future use
  const navLinks = [
    { name: 'Dashboard', path: '/admin', icon: '📊' },
    { name: 'User Management', path: '/admin/users', icon: '👥' },
    { name: 'Assignment', path: '/admin/assign', icon: '🎯' },
    { name: 'Tracking', path: '/admin/tracking', icon: '📈' },
    { name: 'Blog Section', path: '/admin/blog', icon: '📝' },
    { name: 'Invoices', path: '/admin/invoices', icon: '💳' }, 
    { name: 'AI Generator', path: '/admin/ai-gen', icon: '✨' },
  ];

  return (
    <div className="flex h-screen bg-[#F1F5F9] font-['Inter'] relative">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#0F172A] text-white flex flex-col shadow-xl transition-transform duration-300 transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-wider text-white font-['Poppins']">
            ADRITE <span className="text-[#F59E0B]">AGENCY</span>
          </h2>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400">
              ✖
          </button>
        </div>
        
        <nav className="flex-1 p-4 mt-4 space-y-2 overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center p-3 rounded-[8px] transition-all ${
                currentPath === link.path 
                ? 'bg-[#F59E0B] text-[#0F172A] font-bold shadow-lg shadow-orange-500/20' 
                : 'text-[#64748B] hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="mr-3 text-lg">{link.icon}</span> {link.name}
            </Link>
          ))}
        </nav>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-slate-800 bg-[#1E293B]">
          <div className="flex items-center mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#0F172A] flex items-center justify-center font-bold mr-3 shrink-0">
              S
            </div>
            <div className="text-xs overflow-hidden">
              <p className="font-bold text-white truncate">Saleha Baig</p>
              <p className="text-[#64748B]">Admin</p>
            </div>
          </div> 
          <button 
            onClick={handleLogout}
            className="w-full bg-[#EF4444] hover:bg-red-600 text-white py-2 rounded-[8px] text-xs font-bold transition-all active:scale-95"
          >
            LOGOUT
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shadow-sm shrink-0">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 mr-4 text-[#0F172A] bg-slate-100 rounded-md lg:hidden"
            >
              ☰
            </button>
            <div className="text-[#64748B] text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Admin Panel / <span className="text-[#0F172A] font-semibold">{currentPath.split('/').pop() || 'Dashboard'}</span>
            </div>
          </div>

          <div className="hidden sm:block text-xs text-slate-400 italic">
            Welcome back, Saleha!
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F8FAFC]">
           <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;