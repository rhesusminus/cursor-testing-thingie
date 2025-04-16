import { css } from '../../styled-system/css'
import { container } from '../../styled-system/patterns'

export const footerStyles = css({
  width: 'full',
  borderTop: '1px solid',
  borderColor: 'gray.200',
  px: '4',
  py: '6',
})

export const footerContainer = container({
  maxW: '1200px',
})

export const copyrightText = css({
  color: 'gray.600',
  fontSize: 'sm',
})
