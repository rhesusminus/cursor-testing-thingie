import { css } from '../../styled-system/css'

export const personsStyles = css({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
})

export const personList = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '2rem',
  listStyle: 'none',
  padding: 0,
  marginTop: '2rem',
})

export const personItem = css({
  padding: '1.5rem',
  border: '1px solid',
  borderColor: 'slate.200',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
  boxShadow: 'sm',
  '& h2': {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: 'slate.800',
  },
  '& p': {
    color: 'slate.700',
    lineHeight: '1.7',
    marginBottom: '0.5rem',
  },
})
