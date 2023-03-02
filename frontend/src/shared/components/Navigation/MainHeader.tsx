import React from 'react'

const MainHeader = (props: any) => {
   return (
      <header className='main-header'>
         {props.children}
      </header>
   )
}

export default MainHeader