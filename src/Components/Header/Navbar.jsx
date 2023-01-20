import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/ajlogo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Nav_logo'>
                <img src={logo} alt='Logo' height='40px' width='150px' className='nav_img'/>
            </div>
            <div className='Nav_list'>
                <ul type='none' className='ul'>
                    <li>
                    <Link to='/' className='nav_link'>Home</Link>
                    </li>
                    <li>
                    <Link to='/form' className='nav_link'>Create Resume</Link>
                    </li>
                    <li>
                    <Link to='/aboutus' className='nav_link'>About Us</Link>
                    
                    </li>
                    {/* <button type="button" className="btn btn-primary">Login</button> */}
                </ul>
            </div>
        </div>
        // <>
        //     <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        //         <div className="container-fluid">

        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link active" aria-current="page" to='/resume'>Create Resume</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className="nav-link active" aria-current="page" to='/aboutus'>About Us</Link>
        //                     </li>

        //                 </ul>

        //             </div>
        //         </div>
        //     </nav>
        // </>
    )
}

export default Navbar