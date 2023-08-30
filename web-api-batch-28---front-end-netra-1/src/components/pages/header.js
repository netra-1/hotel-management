import {Link} from 'react-router-dom';
import React from 'react';
import ReactLogo from  './../../images/logo.svg'

const Header =()=>{

    // Header Scroll
    let nav = document.querySelector(".navbar");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 50) {
            nav.classList.add("header-scrolled");
        } else {
            nav.classList.remove("header-scrolled");
        }
    }

    // nav hide 
    let navBar = document.querySelectorAll(".nav-link");
    let navCollapse = document.querySelector(".navbar-collapse.collapse");
    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        })
    })

    const LogOut=()=>{
        localStorage.clear();
        window.location.replace('/login');
    }
    
    var menu;
    var logo;

    //admin header
    if (localStorage.getItem('adminTicket')){
        menu = (
            <>
                <ul className="navbar-nav menu-navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/admin_dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/room_category">Room Category</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/room">Room</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/food_category">Food Category</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/food">Food</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/all_staff">Staffs</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <button className='btn btn-outline-danger' onClick={()=>{LogOut()}}>Logout</button>
                </div>
            </>
        )
        logo = (
            <>
                <Link className="navbar-brand" to='/user_dashboard'>
                    <img src={ReactLogo} alt="Logo" />
                </Link>
            </>
        )
    }else if(localStorage.getItem('staffTicket')){
        menu = (
            <>
                <ul className="navbar-nav menu-navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/staff_dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/show_room">Rooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/get_food">Foods</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/all_user">Customers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/show_orders">Show Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact_us">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/staff_profile">Profile</Link>
                    </li>
                </ul>
                <div className="d-flex">
                    <button className='btn btn-outline-danger' onClick={()=>{LogOut()}}>Logout</button>
                </div>
            </>
        )
        logo = (
            <>
                <Link className="navbar-brand" to='/'>
                    <img src={ReactLogo} alt="Logo" />
                </Link>
            </>
        )
    } else if(localStorage.getItem('customerTicket')){
        menu = (
            <>
                <ul className="navbar-nav menu-navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/user_dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about_us">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/get_food">Foods</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/show_room">Rooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact_us">Contact</Link>
                    </li>
                </ul>

                <div class="nav-item d-flex dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    John Doe
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" aria-current="page" to="/customer_profile">Profile</Link></li>
                    <li><Link className="dropdown-item" aria-current="page" to="/food_cart">My Cart</Link></li>
                    <li><Link className="dropdown-item" aria-current="page" to="/my_order">My Order</Link></li>
                    <li><Link className="dropdown-item" aria-current="page" to="/my_bookings">My Bookings</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <div className="">
                    <button className='btn btn-outline-danger' onClick={()=>{LogOut()}}>Logout</button>
                    </div>
                </ul>
                </div>
            </>
        )
        logo = (
            <>
                <Link className="navbar-brand" to='/user_dashboard'>
                    <img src={ReactLogo} alt="Logo" />
                </Link>
            </>
        )
    } else{
        menu = (
            <>
                <ul className="navbar-nav menu-navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about_us">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/show_room">Rooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/get_food">Foods</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contact_us">Contact</Link>
                    </li>
                    <li className="nav-item mt-2 mt-lg-0">
                        <Link className="my-btn" to="/login">Login</Link>
                    </li>
                </ul>
            </>
        )
        logo = (
            <>
                <Link className="navbar-brand" to='/'>
                    <img src={ReactLogo} alt="Logo" />
                </Link>
            </>
        )
    };


    return (
        <>
            <div className='top_header'>
                <div className='container-fluid me-5'>
                <div class="d-flex bd-highlight mb-3">
                    <div class="me-auto p-2 bd-highlight text-light">
                    <ul className='top_header-ul'>
                        <li><a href="mailto:travelodge@example.com" target="_blank" rel="noreferrer" className='li_text'><i className="far fa-envelope text-light"></i> travelodge@example.com</a></li>
                        <li><a href='tel:01-025632' className='li_text'><i className="fas fa fa-phone text-light"></i>  01-025632</a></li>
                        <li><span className='li_text'><i class="far fa-question-circle text-light"></i> 24 hours support</span></li>
                    </ul>
                    </div>
                    <div class="m3-auto p-2 bd-highlight text-light me-5">
                        <ul className='top_header-ul'>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className='li_text'><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className='li_text'><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank" rel="noreferrer" className='li_text'><i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <header className='sticky-top'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid mx-5">
                        {logo}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-stream navbar-toggler-icon"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            {menu}
                        </div>
                    </div>
                </nav>
            </header>












            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" id='top-navbar1'>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {menu}
                </div>
            </div>
            </nav> */}
        </>
    )
}

export default Header;