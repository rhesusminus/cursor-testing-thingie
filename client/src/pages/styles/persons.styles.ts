import { css } from '../../../styled-system/css'

export const personsStyles = css({
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
})

export const personList = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '2rem',
  listStyle: 'none',
  padding: 0,
})

export const personItem = css({
  padding: '1.5rem',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
  boxShadow: 'sm',
  '& h2': {
    marginBottom: '1rem',
    color: 'slate.900',
  },
  '& p': {
    marginBottom: '0.5rem',
    color: 'slate.600',
  },
})
