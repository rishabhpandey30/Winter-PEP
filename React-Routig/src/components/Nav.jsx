import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    // Link is used in react-router-dom which is the enhance version of a tag it do not cause 
    // refresh when we click on the link but a tag does
  return (
     <div>
        <nav>
        <Link to='/home'>Home</Link>
        <Link to='/productList'>Product List</Link>
        <Link to='/About'>About</Link>
        <a href='/Contact'>Contact</a>    {/* here the page will get refresh */}
        </nav>
     </div>
  )
}

export default Nav