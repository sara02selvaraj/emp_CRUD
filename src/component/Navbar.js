import React from 'react'
import { Link } from 'react-router-dom'
let Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand"><i className="fa fa-snowflake fa-spin text-primary mx-2" />React</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/employees">Employees</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">Services</Link></li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link" to="/about">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/employees">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar