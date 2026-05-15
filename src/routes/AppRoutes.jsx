import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from '../pages/public/Login';
import AdminLayout from '../components/dashboard/AdminLayout';
import UserManagement from '../pages/admin/UserManagement';
import Dashboard from '../pages/admin/Dashboard'; 
import ProjectAssignment from '../pages/admin/ProjectAssignment'; 
import BlogSection from '../pages/admin/BlogSection';
import ProjectTracking from '../pages/admin/ProjectTracking';
import Invoices from '../pages/admin/Invoices';
import AIGenerator from '../pages/admin/AIGenerator';

// Humne un responsive files ko import kar liya jo humne abhi banayi hain
import ClientLayout from '../components/dashboard/ClientLayout';
import ClientDashboard from '../pages/client/ClientDashboard';

import ClientProjectTracking from '../pages/client/ClientProjectTracking';
import ClientInvoices from '../pages/client/ClientInvoices';

const AppRoutes = () => {
    return (
        <Routes>
            {/* 1. Default Route */}
            <Route path="/" element={<Navigate to="/admin" replace />} />
            
            {/* 2. Login Route */}
            <Route path="/login" element={<Login />} />

            {/* 3. Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="assign" element={<ProjectAssignment />} />
                <Route path="blog" element={<BlogSection />} />
                <Route path="tracking" element={<ProjectTracking />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="ai-gen" element={<AIGenerator />} />
            </Route>

            {/* 4. Client Routes (Ab responsive file se connect hain) */}
            <Route path="/client" element={<ClientLayout />}>
                <Route index element={<ClientDashboard />} />
                <Route path="tracking" element={<ClientProjectTracking />} />
    <Route path="invoices" element={<ClientInvoices />} />
            </Route>

            {/* 5. 404 Page */}
            <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-screen bg-[#0F172A] text-white">
                    <h1 className="text-6xl font-bold mb-4">404</h1>
                    <p className="text-2xl">Page Not Found</p>
                </div>
            } />
        </Routes>
    );
};

export default AppRoutes;