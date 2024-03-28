import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/easycart.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Navbar() {

    const [show ,setShow] =useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>50){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })

  return (
    <div className={`${show && 'nav-black'} nav d-flex align-items-center justify-content-between`}>
   <Link to={'/'}> <img className='ms-5' style={{background:"none"}} width={"180px"} src={logo} alt="no-image" /></Link>
    <div className=''>
        <Link to={'/categories'}><Button style={{width:"140px",height:"40px",marginTop:'15px'}} className='rounded me-4 '  variant="outline-danger"><i class="fa-solid fa-bag-shopping"></i> Categories</Button></Link>
        <Link to={'/allusers'}><Button style={{width:"140px",height:"40px",marginTop:'15px'}} className='rounded me-5 '  variant="outline-warning"><i class="fa-solid fa-users"></i> All Users</Button></Link>
    
    </div>
</div>
  )
}

export default Navbar