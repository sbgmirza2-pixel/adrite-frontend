import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ allowedRoles }) => {
    // Hamare authSlice se check karenge
    const { token, role } = useSelector((state) => state.auth);
    
    // Agar Redux khali hai toh localStorage check karenge (Backup)
    const activeToken = token || localStorage.getItem("access_token");
    const activeRole = role || localStorage.getItem("role");

    // 1. Agar login nahi hai
    if (!activeToken) {
        return <Navigate to="/login" replace />;
    }

    // 2. Agar login hai par role sahi nahi hai
    if (allowedRoles && !allowedRoles.includes(activeRole)) {
        return <Navigate to="/login" replace />; // Ya unauthorized page
    }

    // 3. Sab theek hai toh page dikhao
    return <Outlet />;
};

export default PrivateRoute;