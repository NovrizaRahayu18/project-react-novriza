import { Fragment } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <Fragment>
            <nav className="navbar">
                <div className="container">
                    <ul className="menu">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/geogrid'>Geogrid</Link></li>
                        <li><Link to='/geomembrane'>Geomembrane</Link></li>
                        <li><Link to='/kontak-kami'>Kontak Kami</Link></li>
                    </ul>
                    
                </div>
	        </nav>
        </Fragment>
    )
}

export default Navbar