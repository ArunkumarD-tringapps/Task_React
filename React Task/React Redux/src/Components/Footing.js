import React from 'react'
import {useSelector} from 'react-redux';
function Footing() {
  const username=useSelector((state)=>state.user.myname)
  return (
    <footer><h1>{username}</h1>
    </footer>
  )
}
export default Footing