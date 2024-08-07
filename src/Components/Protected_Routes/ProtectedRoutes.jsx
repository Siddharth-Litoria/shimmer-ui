import {Outlet , Navigate} from 'react-router-dom'
// Protected route acts as a wrapper for the protected routes 
function ProtectedRoutes() {
  // Set this to true or false to set protected routes
  const isAuthenticated = true;
    return (
    isAuthenticated ? <Outlet/>:<Navigate to="/login"/>
  )
}

export default ProtectedRoutes