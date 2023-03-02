import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';

import Backdrop from './Backdrop';
import { ReactNode } from 'react';

interface ModalOverlay {
   className?: string
   headerClass?: string
   header?: string
   onSubmit?: () => void
   contentClass?: string
   children?: ReactNode
   footerClass?: string
   footer?: ReactNode
   show: boolean
   onCancel: () => void
}


const ModalOverlay = (props: ModalOverlay) => {
   const content = (<div className={`modal ${props.className}`}>
      <header className={`modal__header ${props.headerClass}`}>
         <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}>
         <div className={`modal__content ${props.contentClass}`}>
            {props.children}
         </div>
         <footer className={`modal__footer ${props.footerClass}`}>
            {props.footer}
         </footer>
      </form>
   </div>)
   return createPortal(content, document.getElementById("modal-hook") as HTMLElement);
}

const Modal = (props: ModalOverlay) => {
   return (
      <>
         {props.show && <Backdrop onClick={props.onCancel} />}
         <CSSTransition in={props.show} unmountOnExit mountOnEnter timeout={200} classNames={"modal"}>
            <ModalOverlay {...props} />
         </CSSTransition>
      </>
   )
}

export default Modal;