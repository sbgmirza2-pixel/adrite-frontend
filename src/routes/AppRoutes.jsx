import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/public/Login';
import AdminLayout from '../components/dashboard/AdminLayout';
import UserManagement from '../pages/admin/UserManagement';
import Dashboard from '../pages/admin/Dashboard'; 
import ProjectAssignment from '../pages/admin/ProjectAssignment'; 
import BlogSection from '../pages/admin/BlogSection';
import ProjectTracking from '../pages/admin/ProjectTracking';
import Invoices from '../pages/admin/Invoices';
import AIGenerator from '../pages/admin/AIGenerator';

// Note: PrivateRoute ko abhi ke liye import nahi kiya taake bypass ho sake

const AppRoutes = () => {
    return (
        <Routes>
            {/* 1. Default Route - Seedha Admin Dashboard par bhej raha hai */}
            <Route path="/" element={<Navigate to="/admin" replace />} />

            {/* 2. Login Route - Abhi bhi maujood hai agar check karna ho toh */}
            <Route path="/login" element={<Login />} />

            {/* 3. Admin Routes (Bypassed) - PrivateRoute hata diya hai */}
            <Route path="/admin" element={<AdminLayout />}>
                {/* Index page (Direct Dashboard) */}
                <Route index element={<Dashboard />} />
                
                {/* Baqi Sections */}
                <Route path="users" element={<UserManagement />} />
                <Route path="assign" element={<ProjectAssignment />} />
                <Route path="blog" element={<BlogSection />} />
                <Route path="tracking" element={<ProjectTracking />} />
                <Route path="invoices" element={<Invoices />} />

                <Route path="ai-gen" element={<AIGenerator />} />
            </Route>

            {/* 4. Client Routes (Bypassed) */}
            <Route path="/client" element={<AdminLayout />}>
                <Route index element={<div className="p-6 text-white text-2xl font-bold">Client Dashboard Content</div>} />
                <Route path="invoices" element={<div className="p-6 text-white">Client Invoices Page</div>} />
            </Route>

            {/* 5. 404 Page */}
            <Route path="*" element={<div className="flex items-center justify-center h-screen bg-[#0F172A] text-white font-bold text-2xl">404 - Page Not Found</div>} />
        </Routes>
    );
};

export default AppRoutes;