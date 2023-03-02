import { Outlet } from 'react-router-dom'

import MainNavigation from '../Navigation/MainNavigation'

const RootLayot = () => {
   return (
      <>
         <MainNavigation />
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default RootLayot