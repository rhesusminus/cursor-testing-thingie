import { css } from '../../styled-system/css'

export const navbarStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  height: '64px',
  backgroundColor: 'slate.900',
  color: 'white',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10,
  maxWidth: '100vw',
  boxSizing: 'border-box',
})

export const navLinks = css({
  display: 'flex',
  gap: '2rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  '@media (max-width: 768px)': {
    display: 'none',
    '&[data-is-open="true"]': {
      display: 'flex',
      position: 'fixed',
      flexDirection: 'column',
      top: '64px', // adjust this value based on your navbar height
      left: 0,
      width: '100%',
      backgroundColor: 'slate.900',
      padding: '1rem',
      alignItems: 'center',
      boxSizing: 'border-box',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
  },
})

export const hamburgerButton = css({
  display: 'none',
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  height: '40px',
  width: '40px',
  padding: 0,
  fontSize: '1.75rem',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 768px)': {
    display: 'flex',
  },
})

export const navLink = css({
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    color: 'slate.300',
  },
})

export const activeNavLink = css({
  color: 'white',
  textDecoration: 'underline',
  textDecorationColor: 'blue.400',
  textDecorationThickness: '2px',
  textUnderlineOffset: '4px',
  '&:hover': {
    color: 'slate.300',
  },
})

export const brandText = css({
  fontSize: '1.5rem',
  fontWeight: 'bold',
})
