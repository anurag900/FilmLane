import React from 'react'
import logo  from '../../logo.png'
import {Link} from  'react-router-dom'
import {HiSearch} from 'react-icons/hi'

const Header = () => {

    return (
    <nav className="header">

        
<img src={logo} alt="mylogo" />
         <div>
          <Link to="/">Home</Link>
          <Link to="/tvshows">TVShows</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/Recently_Added">Recently Added</Link>
          <Link to="/My_List">My List</Link>
         </div>
          
         <  HiSearch />

    </nav>
     
  )
}

export default Header;

