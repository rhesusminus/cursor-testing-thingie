import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Home } from './Home'

export default describe('Home Component', () => {
  it('renders the home page with correct heading', () => {
    render(<Home />)

    // Check that the heading is rendered
    const heading = screen.getByRole('heading', { level: 1, name: 'Home' })
    expect(heading).toBeInTheDocument()
  })

  it('applies the correct CSS class to the container', () => {
    render(<Home />)

    const container = screen.getByText('Home').closest('div')
    expect(container).toHaveClass('pos_relative')
    expect(container).toHaveClass('max-w_1200px')
    expect(container).toHaveClass('mx_auto')
  })
})
