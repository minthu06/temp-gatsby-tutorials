import React, {useState} from "react"
import { Link } from "gatsby"
import {FaAlignJustify} from 'react-icons/fa'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/"><img src="https://gatsby-v3-tutorial-recipes.netlify.app/static/logo-42d0a9bfc3a025a4e387ed1cc5d2ddda.svg" alt="simly recipes"/></Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FaAlignJustify/>
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
              <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Home</Link>
              <Link to="/reciples" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Recipes</Link>
              <Link to="/tags" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>Tags</Link>
              <Link to="/about" className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>about</Link>
              <div className="nav-link contact-link">
               <Link to="/contact" className="btn" >contact</Link>
              </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
