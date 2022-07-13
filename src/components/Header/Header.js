import React from 'react';
import { Link } from 'react-router-dom'
import logo from './../../logos/Group-1329.png'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 pt-2 pb-2">
                <div class="container-fluid">
                    <a class="" href="#">
                        <img className='w-25' src={logo}  alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active fw-bold" aria-current="page" to="/home">Home</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link active fw-bold" aria-current="page" to="/donation">Donation</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active fw-bold" aria-current="page" to="/events">Events</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active fw-bold" aria-current="page" to="/addEvents">Add Events</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active fw-bold" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>

                        <li class="nav-item">
                        <div className="btn btn-primary">
                            <Link class="nav-link active fw-bold text-white pt-0" aria-current="page" to="/login">Register</Link>
                        </div>
                            
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Header;