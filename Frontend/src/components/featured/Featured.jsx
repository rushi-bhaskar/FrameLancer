import React, {  useState } from 'react'
import {useNavigate,Link} from "react-router-dom";
import "./Featured.scss"

const Featured = () => {

    const [input,setInput]=useState("");
    const navigate =useNavigate();

    const handleSubmit=()=>{
        navigate(`/gigs?search=${input}`);
    }
  return (
    <div className='featured'>
        <div className="container">
        <div className="left">
        <span className='bold'>EVERYONE&apos;S PRIVATE</span>
            <h1> PHOTOGRAPHER</h1> 
            
            <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt="" />
                    <input type="text" placeholder='Try "Potrait Shoot" ' onChange={(e)=>setInput(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <Link className='link' to="/gigs?cat=wedding"><button>Wedding Photography</button></Link>
                <Link className='link' to="/gigs?cat=fashion"><button>Fashion Photography</button></Link>
                <Link className='link' to="/gigs?cat=product"><button>Product Photography</button></Link>
                <Link className='link' to="/gigs?cat=food"><button>Food Photography</button></Link>
            
            </div>
        </div>
        <div className="right">
            <img src="./img/cameraMan.png" alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Featured
