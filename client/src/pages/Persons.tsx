import { css } from '../../styled-system/css'

const personsStyles = css({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
})

export function Persons() {
  return (
    <div className={personsStyles}>
      <h1>Persons</h1>
    </div>
  )
}
