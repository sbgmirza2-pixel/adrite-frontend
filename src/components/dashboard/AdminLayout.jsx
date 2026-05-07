import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("access_token");
    localStorage.setItem("role", "");
    navigate('/login');
  };

  // Helper function to check path
  const currentPath = location.pathname;

  return (
    <div className="flex h-screen bg-[#F1F5F9] font-['Inter']">
      
      {/* Sidebar - Dark Navy (#0F172A) */}
      <aside className="w-64 bg-[#0F172A] text-white flex flex-col shadow-xl">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold tracking-wider text-white font-['Poppins']">
            ADRITE <span className="text-[#F59E0B]">AGENCY</span>
          </h2>
        </div>
        
        <nav className="flex-1 p-4 mt-4 space-y-2">
          {/* Dashboard Link */}
          <Link 
            to="/admin" 
            className={`flex items-center p-3 rounded-[8px] transition-all ${
              currentPath === '/admin' 
              ? 'bg-[#F59E0B] text-[#0F172A] font-bold' 
              : 'text-[#64748B] hover:text-white hover:bg-slate-800'
            }`}
          >
            <span className="mr-3">📊</span> Dashboard
          </Link>

          {/* User Management Link */}
          <Link 
            to="/admin/users" 
            className={`flex items-center p-3 rounded-[8px] transition-all ${
              currentPath === '/admin/users' 
              ? 'bg-[#F59E0B] text-[#0F172A] font-bold' 
              : 'text-[#64748B] hover:text-white hover:bg-slate-800'
            }`}
          >
            <span className="mr-3">👥</span> User Management
          </Link>
          <Link 
    to="/admin/assign" 
    className={`flex items-center p-3 rounded-[8px] transition-all ${
      currentPath === '/admin/assign' 
      ? 'bg-[#F59E0B] text-[#0F172A] font-bold' 
      : 'text-[#64748B] hover:text-white hover:bg-slate-800'
    }`}
  >
    <span className="mr-3">🎯</span> Assignment
  </Link>

          {/* Blog Section Link */}
          <Link 
            to="/admin/blog" 
            className={`flex items-center p-3 rounded-[8px] transition-all ${
              currentPath === '/admin/blog' 
              ? 'bg-[#F59E0B] text-[#0F172A] font-bold' 
              : 'text-[#64748B] hover:text-white hover:bg-slate-800'
            }`}
          >
            <span className="mr-3">📝</span> Blog Section
          </Link>
        </nav>

        {/* User Info & Logout Section */}
        <div className="p-4 border-t border-slate-800 bg-[#1E293B]">
          <div className="flex items-center mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-[#F59E0B] text-[#0F172A] flex items-center justify-center font-bold mr-3">
              S
            </div>
            <div className="text-xs">
              <p className="font-bold text-white">Saleha Baig</p>
              <p className="text-[#64748B]">Admin</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full bg-[#EF4444] hover:bg-red-600 text-white py-2 rounded-[8px] text-xs font-bold transition-all"
          >
            LOGOUT
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <div className="text-[#64748B] text-xs font-bold uppercase tracking-widest">
            Admin Panel / <span className="text-[#0F172A] font-semibold">{currentPath.split('/').pop() || 'Dashboard'}</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
           <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;