import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { startLoggOut } from '../../actions/auth'

export const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(startLoggOut())
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <span className="navbar-item nav-link text-info">

                     <h5>Juan</h5>
                     
                </span>
                
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/home"
                >
                    Image Day
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/image/galery"
                >
                    Image Galery
                </NavLink>


                <button
                className="nav-item nav-link btn  btn-outline-danger"
                onClick={handleLogout} 
                >
                Logout
                </button>

               
            </ul>
        </div>
    </nav>
)
}