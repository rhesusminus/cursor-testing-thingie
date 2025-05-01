import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

export const layoutContainer = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowX: 'hidden',
})

export const headerStyles = css({
  width: '100%',
  height: '64px', // Match this with the top value in navLinks mobile menu
})

export const mainStyles = flex({
  flex: '1',
  px: '4',
  py: '6',
  maxW: '1200px',
  mx: 'auto',
  direction: 'column',
  gap: '4',
  marginTop: '64px', // Add top margin to account for fixed navbar
  width: '100%',
  boxSizing: 'border-box',
})
