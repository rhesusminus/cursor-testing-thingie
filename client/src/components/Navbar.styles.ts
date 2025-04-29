import { css } from '../../styled-system/css'

export const navbarStyles = css({
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
      position: 'absolute',
      flexDirection: 'column',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'slate.900',
      padding: '1rem',
    },
  },
})

export const hamburgerButton = css({
  display: 'none',
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  padding: '0.5rem',
  fontSize: '1.75rem',
  '@media (max-width: 768px)': {
    display: 'block',
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
