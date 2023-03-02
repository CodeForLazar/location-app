import { CSSTransition } from "react-transition-group";
import { createPortal } from 'react-dom';

const SideDrawer = (props: any) => {

   const contetn = (
      <CSSTransition in={props.show} timeout={200} classNames={"slide-in-left"} mountOnEnter unmountOnExit>
         <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>
      </CSSTransition>
   );

   return createPortal(contetn, document.getElementById("drawer-hook") as HTMLElement);

}

export default SideDrawer;