import React from 'react'
import Link from 'gatsby-link'

import facebook from '../img/facebook.svg'
import logo from '../img/the-mat-logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
        <img src={logo} alt="The Mat" style={{ height: '88px' }} />
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/pricing">
          Pricing
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.facebook.com/mtmorrismat/?rc=p"
          target="_blank"
          title="Check The Mat out on Facebook"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Check The Mat out on Facebook" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
