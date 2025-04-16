import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

export const layoutContainer = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const headerStyles = css({
  width: 'full',
  borderBottom: '1px solid',
  borderColor: 'gray.200',
})

export const mainStyles = flex({
  flex: '1',
  px: '4',
  py: '6',
  maxW: '1200px',
  mx: 'auto',
  direction: 'column',
  gap: '4',
})
