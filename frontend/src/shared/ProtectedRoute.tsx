import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAppSelector } from "../store";


const ProtectedRoute = () => {

   const navigate = useNavigate();

   const { isAuth } = useAppSelector(state => state.authReducer);

   useEffect(() => {
      if (!isAuth) {
         navigate("/");
      }
   }, [isAuth]);

   return (
      <Outlet />
   )
}

export default ProtectedRoute