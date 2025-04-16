import { NavLink } from 'react-router-dom'
import { navbarStyles, navLinks, navLink, activeNavLink, brandText } from './Navbar.styles'

export function Navbar() {
  return (
    <nav className={navbarStyles}>
      <div className={brandText}>My App</div>
      <ul className={navLinks}>
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
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeNavLink : navLink)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
