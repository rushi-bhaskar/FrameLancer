import React, { useEffect, useState } from 'react'
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import "./Navbar.scss"
import newRequest from '../../utils/newRequests.js';
import { NavHashLink } from 'react-router-hash-link';


const Navbar = () => {
    const [active, setActive]=useState(false)
    const [open, setOpen]=useState(false)

    const {pathname} =useLocation()

    const isActive =() => {
        window.scrollY >0 ? setActive(true) : setActive(false);
    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.addEventListener("scroll", isActive);
        }

    },[])

    const currentUser= JSON.parse(localStorage.getItem("currentUser"));

    const navigate = useNavigate();

    const handleLogout=async ()=>{
      try {
        await newRequest.post("/auth/logout");
        localStorage.setItem("currentUser", null );
        navigate("/")

      } catch (err) { 
        //
       }
    };

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
            <Link to="/" className='link'>
            <span className='text' >FrameLancer</span>
            </Link>
            <span className='dot'>`</span>
        </div>
        <div className="links">
        <NavHashLink to="/#f2" className="link"><span>FrameLancer Business</span></NavHashLink>
        <NavHashLink to="/#explore" className="link"><span>Explore</span></NavHashLink>
            
            {!currentUser?.isSeller && <Link className="link" to="/register"><span>Become a Seller</span></Link>}
            {currentUser? (
                <div className="user" onClick={()=> setOpen(!open)}>
                    <img src={currentUser.img || "/img/noavatar.jpg"} alt=""/>
                    <span>{currentUser?.username}</span>
                    {open && (
                    <div className="options">
                        {currentUser?.isSeller && (
                            <>
                            <Link className="link" to="/myGigs">Gigs</Link>
                            <Link className="link" to="/add">Add New Gig</Link>
                            </>
                        )}
                        <Link className="link" to="/orders">Orders</Link>
                        <Link className="link" to="/messages">Messages</Link>
                        <Link className="link" onClick={handleLogout}>Logout</Link>
                    </div>
                    )}
                </div>
            ) : (
              <>
                <Link to="/login" className="link">Sign in</Link>
                <Link className="link" to="/register">
                  <button>Join</button>
                </Link>
              </>
            )}
        </div>
      </div> 
      {(active || pathname !=="/") && (
        <>
      <hr/>
      <div className="menu">
        <Link className='link' to="/gigs?cat=wedding">Wedding Photography</Link>
        <Link className='link' to="/gigs?cat=architecture">Architecture Photography</Link>
        <Link className='link' to="/gigs?cat=food">Food Photography</Link>
        <Link className='link' to="/gigs?cat=fashion">Fashion Photography</Link>
        <Link className='link' to="/gigs?cat=product">Product Photography</Link>
               
      </div>
      <hr />
      </>
    )}
    </div>
  )
}

export default Navbar
