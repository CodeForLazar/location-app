import React, { ReactNode } from 'react';


const Card = (props: { children: ReactNode, className?: string }) => {
   return (
      <div className={`card ${props.className}`}>
         {props.children}
      </div>
   );
};

export default Card;