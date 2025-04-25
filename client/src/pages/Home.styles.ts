import { css } from '../../styled-system/css'
import { container } from '../../styled-system/patterns'

export const homeContainer = container({
  maxW: '1200px',
  px: '4',
  py: '8',
})

export const heroSection = css({
  textAlign: 'center',
  mb: '12',
})

export const heading = css({
  fontSize: '4xl',
  fontWeight: 'bold',
  color: 'slate.900',
  mb: '4',
})
