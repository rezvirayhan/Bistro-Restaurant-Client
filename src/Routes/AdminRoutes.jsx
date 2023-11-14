import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()
    if (loading || isAdminLoading) {
        return <center><progress className="progress w-56"></progress></center>
    }
    if (user && isAdmin) {
        return children;

    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;