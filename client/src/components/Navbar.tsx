import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {
  navbarStyles,
  navLinks,
  navLink,
  activeNavLink,
  brandText,
  hamburgerButton,
} from './Navbar.styles'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={navbarStyles}>
      <div className={brandText}>My App</div>
      <button
        type="button"
        className={hamburgerButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={navLinks} data-is-open={isMenuOpen}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/persons" className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            Persons
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets" className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
