import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import useFirebase from '../../hooks/useFirebase'
import './header.css'

const Header = () => {
  const {user, isAdmin} = useContext(Context)
  const {logOut} = useFirebase()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <span className="navbar-brand" >Mahmud Auto</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
      {isAdmin && <li className="nav-item">
          <Link to='/addcar' className="nav-link active" aria-current="page" >Add New Car</Link>
        </li>}
        <li className="nav-item">
          <Link to='/cars' className="nav-link active" aria-current="page" > Cars</Link>
        </li>
       {!user && 
       
      [ <li className="nav-item">
       <Link to='/login' className="nav-link active" aria-current="page" >Login</Link>
       </li>,
       <li className="nav-item">
       <Link to='/register' className="nav-link active" aria-current="page" >Registger</Link>
       </li>]
       }
          {user && 
       
        <li className="nav-item">
        <Link to='/dashboard' className="nav-link active" aria-current="page" >Dashboard</Link>
        </li>
        }
       
         
      </ul>
    </div>
    {user && <ul className="navbar-nav">
      <li className="nav-item">
        <span className="nav-link active"  onClick={logOut}> LogOut</span>
      </li>
      <li className="nav-item">
        <span className="nav-link active" >  {user.displayName} {isAdmin && ' -Admin'}</span>
      </li>
    </ul>}
  </div>
</nav>
    )
}

export default Header
