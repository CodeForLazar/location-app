import { NavLink, Link } from 'react-router-dom';
import { useAppSelector } from "../../../store";
import { useAppDispatch } from "../../../store";
import { authActions } from "../../../store/authSlice";


const NavLinks = () => {

   const dispatch = useAppDispatch();

   const { isAuth } = useAppSelector(state => state.authReducer);

   const logout = () => {
      dispatch(authActions.logout());
   }

   return (
      <ul className='nav-links'>
         <li>
            <NavLink to={"/"}>ALL USERS</NavLink>
         </li >
         {isAuth && (
            <li>
               <NavLink to={"/u1/places"}>MY PALCES</NavLink>
            </li >
         )}
         {isAuth && (<li>
            <NavLink to={"/places/new"}>ADD PLACE</NavLink>
         </li >
         )}
         {!isAuth && (<li>
            <NavLink to={"/auth"}>AUTHENTICATE</NavLink>
         </li >
         )}
         {isAuth && (<li>
            <Link to={"/"} onClick={logout}>LOGOUT</Link>
         </li >
         )}
      </ul>
   )
}

export default NavLinks