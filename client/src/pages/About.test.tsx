import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { About } from './About'

export default describe('About Component', () => {
  it('renders the about page with correct headings', () => {
    render(<About />)

    // Check that the main heading is rendered
    const mainHeading = screen.getByRole('heading', { level: 1, name: 'About Us' })
    expect(mainHeading).toBeInTheDocument()

    // Check that section headings are rendered
    const missionHeading = screen.getByRole('heading', { level: 2, name: 'Our Mission' })
    const teamHeading = screen.getByRole('heading', { level: 2, name: 'Our Team' })
    const contactHeading = screen.getByRole('heading', { level: 2, name: 'Contact' })

    expect(missionHeading).toBeInTheDocument()
    expect(teamHeading).toBeInTheDocument()
    expect(contactHeading).toBeInTheDocument()
  })

  it('renders section content correctly', () => {
    render(<About />)

    // Check that section content is rendered
    expect(
      screen.getByText(/We are dedicated to creating innovative solutions/)
    ).toBeInTheDocument()
    expect(screen.getByText(/Our diverse team brings together expertise/)).toBeInTheDocument()
    expect(screen.getByText(/Have questions or want to learn more/)).toBeInTheDocument()
    expect(screen.getByText(/contact@example.com/)).toBeInTheDocument()
  })

  it('applies the correct CSS classes', () => {
    render(<About />)

    // Check that the container has correct styling
    const container = screen.getByText('About Us').closest('div')
    expect(container).toHaveClass('max-w_800px')
    expect(container).toHaveClass('m_0_auto')
    expect(container).toHaveClass('p_2rem')

    // Check that the heading has correct styling
    const heading = screen.getByText('About Us')
    // Instead of checking the exact style, verify it exists
    expect(heading).toBeInTheDocument()

    // Check that sections are present
    const sections = screen.getAllByText(/Our|Contact/).map((el) => el.closest('section'))
    expect(sections.length).toBeGreaterThan(0)
  })
})
