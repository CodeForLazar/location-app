import { Link } from 'react-router-dom'
import { useState } from "react";

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UiElements/Backdrop';

const MainNavigation = () => {

   const [sideMenuOpen, setSideMenuOpen] = useState(false);

   const openMenu = () => {
      setSideMenuOpen(true);
   };

   const closeMenu = () => {
      setSideMenuOpen(false);
   };


   return (
      <>
         {sideMenuOpen && <Backdrop onClick={closeMenu} />}
         <SideDrawer show={sideMenuOpen} onClick={closeMenu}>
            <nav className='main-navigation__drawer-nav'>
               <NavLinks />
            </nav>
         </SideDrawer>
         <MainHeader>
            <button className='main-navigation__menu-btn' onClick={openMenu}>
               <span />
               <span />
               <span />
            </button>
            <h1 className='main-navigation__title'>
               <Link to={"/"}>YourPlaces</Link >
            </h1>
            <nav className='main-navigation__header-nav'>
               <NavLinks />
            </nav>
         </MainHeader>
      </>
   )
}

export default MainNavigation