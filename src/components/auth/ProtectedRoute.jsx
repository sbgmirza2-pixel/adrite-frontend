import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // 1. Agar login nahi hai, toh seedha login page par bhej do
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 2. Agar login hai par role match nahi karta (e.g. Intern Admin page khol raha hai)
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 3. Sab theek hai? Toh page dikha do
  return <Outlet />;
};

export default ProtectedRoute;