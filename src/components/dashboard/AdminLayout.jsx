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
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F1F5F9] font-['Inter'] relative overflow-x-hidden">
      
      {/* 📱 Mobile Header */}
      <div className="w-full bg-[#0F172A] text-white lg:hidden h-16 px-6 flex justify-between items-center border-b border-slate-800 sticky top-0 z-50">
        <h2 className="text-xl font-bold tracking-wider text-white font-['Poppins']">
          ADRITE <span className="text-[#F59E0B]">AGENCY</span>
        </h2>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-lg text-xl"
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {isSidebarOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#0F172A] border-b border-slate-800 px-6 pb-6 flex flex-col z-40 shadow-2xl time-scrollbar-hide">
          <nav className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center p-3 rounded-[8px] text-sm transition-all ${
                  currentPath === link.path 
                    ? 'bg-[#F59E0B] text-[#0F172A] font-bold shadow-lg shadow-orange-500/20' 
                    : 'text-[#64748B] hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="mr-3 text-base">{link.icon}</span> {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-[#F59E0B] text-[#0F172A] flex items-center justify-center font-bold text-xs mr-2">
                S
              </div>
              <span className="text-xs font-bold text-white">Saleha Baig</span>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-[#EF4444] hover:bg-red-600 text-white px-4 py-1.5 rounded-[6px] text-[11px] font-bold"
            >
              LOGOUT
            </button>
          </div>
        </div>
      )}

      {/* 💻 Desktop Sidebar - YAHAN SE SCROLLBAR HATA DIYA HAI */}
      <aside className="hidden lg:flex w-64 bg-[#0F172A] text-white flex-col shadow-xl sticky top-0 h-screen shrink-0 overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold tracking-wider text-white font-['Poppins']">
            ADRITE <span className="text-[#F59E0B]">AGENCY</span>
          </h2>
        </div>
        
        {/* Is class se scrollbar gayab ho jayega aur styling clean dikhegi */}
        <nav className="flex-1 p-4 mt-4 space-y-2 overflow-y-auto scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
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

        {/* Desktop User Info & Logout */}
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

      {/* Main View Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Desktop Header */}
        <header className="hidden lg:flex h-16 bg-white border-b border-slate-200 items-center justify-between px-6 lg:px-8 shadow-sm shrink-0">
          <div className="text-[#64748B] text-[10px] md:text-xs font-bold uppercase tracking-widest">
            Admin Panel / <span className="text-[#0F172A] font-semibold">{currentPath.split('/').pop() || 'Dashboard'}</span>
          </div>
          <div className="text-xs text-slate-400 italic">
            Welcome back, Saleha!
          </div>
        </header>

        {/* Main Content Component */}
        <main className="flex-1 p-4 md:p-8 bg-[#F8FAFC] overflow-y-auto">
           <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;