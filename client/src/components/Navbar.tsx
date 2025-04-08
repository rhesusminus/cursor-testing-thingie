import { css } from '../../styled-system/css'

const navbarStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  backgroundColor: 'slate.900',
  color: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 10,
})

const navLinks = css({
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

const navLink = css({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    color: 'slate.300',
  },
})

export function Navbar() {
  return (
    <nav className={navbarStyles}>
      <div className={css({ fontSize: '1.5rem', fontWeight: 'bold' })}>My App</div>
      <ul className={navLinks}>
        <li>
          <a href="/" className={navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={navLink}>
            About
          </a>
        </li>
        <li>
          <a href="/contact" className={navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
