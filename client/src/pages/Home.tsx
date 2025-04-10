import { useState } from 'react'
import viteLogo from '/vite.svg'
import { css } from '../../styled-system/css'
import reactLogo from '../assets/react.svg'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={css({ padding: '2rem' })}>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div
        className={css({
          padding: '2em',
          textAlign: 'center',
        })}
      >
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
} 