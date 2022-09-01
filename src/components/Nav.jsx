// use rfc
import React from 'react'

const navStyle = {
  background: '#f4a261'
}

export default function Nav() {
  return (
    <>
      <nav className="navbar" style= {navStyle}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">To Do List</a>
        </div>
      </nav>    
    </>
  )
}

