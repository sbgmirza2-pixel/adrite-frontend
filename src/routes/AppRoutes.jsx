import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/public/Login';
import AdminLayout from '../components/dashboard/AdminLayout';
import UserManagement from '../pages/admin/UserManagement';
import Dashboard from '../pages/admin/Dashboard'; 
import ProjectAssignment from '../pages/admin/ProjectAssignment'; 
import PrivateRoute from './PrivateRoute';
import BlogSection from '../pages/admin/BlogSection';
const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Default Redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* Admin Protected Routes */}
            <Route element={<PrivateRoute allowedRoles={['admin']} />}>
                <Route path="/admin" element={<AdminLayout />}>
                    
                    {/* Ye Dashboard khulega jab path /admin ho */}
                    <Route index element={<Dashboard />} />
                    
                    {/* Ye /admin/users ban jayega */}
                    <Route path="users" element={<UserManagement />} />
                    
                    {/* Drag and Drop Assignment Route */}
                    <Route path="assign" element={<ProjectAssignment />} />
                    <Route path="blog" element={<BlogSection />} />

               
                    
                    {/* Future Sections */}
                    <Route path="ai-gen" element={<div>AI Image Generator Coming Soon</div>} />
                       
                </Route>
            </Route>

            {/* Client Protected Routes */}
            <Route element={<PrivateRoute allowedRoles={['client']} />}>
                <Route path="/client" element={<div>Client Dashboard Content</div>} />
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    );
};

export default AppRoutes;