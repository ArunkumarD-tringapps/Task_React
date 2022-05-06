import React from 'react';
import {useSelector} from 'react-redux';
 function Heading() {
  const user=useSelector((state)=>state.user.myname)
  return (
  <header>   
      <h1>{user}</h1>
  </header>
  )
}

export default Heading