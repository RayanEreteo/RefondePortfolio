import React from 'react'

import "../css/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className="link-container">
            <a href="" className='link'>Introduction</a>
            <div className="separator" style={{width: '20px', height: "100%", background: "#D9D9D9"}}></div>
            <a href="" className='link'>Mon Parcours</a>
            <div className="separator" style={{width: '20px', height: "100%", background: "#D9D9D9"}}></div>
            <a href="" className='link'>Portfolio</a>
            <div className="separator" style={{width: '20px', height: "100%", background: "#D9D9D9"}}></div>
            <a href="" className='link'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar