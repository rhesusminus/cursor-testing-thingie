import { css } from '../../styled-system/css'

export const personsStyles = css({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
})

export const headingStyles = css({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  color: 'slate.900',
})

export const sectionStyles = css({
  marginBottom: '2rem',
  '& h2': {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'slate.800',
  },
  '& p': {
    color: 'slate.700',
    lineHeight: '1.7',
    marginBottom: '1rem',
  },
})
