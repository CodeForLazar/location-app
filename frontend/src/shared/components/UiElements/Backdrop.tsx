import { createPortal } from 'react-dom'

const Backdrop = (props: any) => {

   const content = <div className='backdrop' onClick={props.onClick}></div>;

   return createPortal(content, document.getElementById("backdrop-hook") as HTMLElement);
}

export default Backdrop