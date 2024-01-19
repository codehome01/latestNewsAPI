import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Nav.css'

const Nav = ({setCategory,setCountry}) => {

  return (
    <>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand"><b>SHAVIC LATEST <span className='text-danger'>NEWS</span></b></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={() => setCategory("general")}>Home</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={() => setCategory("sports")}>Sports</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={() => setCategory("health")}>Health</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={() => setCategory("science")}>Science</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={() => setCategory("business")}>Business</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={() => setCategory("technology")}>Technology</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" onClick={() => setCategory("entertainment")}>Entertainment</a>
                  </li>
                </ul>
                
                 
                    
              </div>
            </div>
          </nav>
          
        </div>

    </>
  )
}

export default Nav
