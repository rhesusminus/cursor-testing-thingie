import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Contact } from './Contact'

export default describe('Contact Component', () => {
  beforeEach(() => {
    // Mock console.log to verify form submission
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the contact page with heading and form elements', () => {
    render(<Contact />)

    // Check that the heading is rendered
    const heading = screen.getByRole('heading', { level: 1, name: 'Contact Us' })
    expect(heading).toBeInTheDocument()

    // Check that form elements are rendered
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('updates form fields when user types', () => {
    render(<Contact />)

    // Get form elements
    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email')
    const messageInput = screen.getByLabelText('Message')

    // Simulate user typing
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } })

    // Check that the values were updated
    expect(nameInput).toHaveValue('John Doe')
    expect(emailInput).toHaveValue('john@example.com')
    expect(messageInput).toHaveValue('Hello there!')
  })

  it('submits the form with correct data', () => {
    render(<Contact />)

    // Get form elements
    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email')
    const messageInput = screen.getByLabelText('Message')
    const submitButton = screen.getByRole('button', { name: 'Send Message' })

    // Fill out the form
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } })

    // Submit the form
    fireEvent.click(submitButton)

    // Check that console.log was called with the form data
    expect(console.log).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello there!',
    })
  })

  it('applies the correct CSS classes', () => {
    render(<Contact />)

    // Check container has expected styling
    const container = screen.getByText('Contact Us').closest('div')
    expect(container).toHaveClass('pos_relative')
    expect(container).toHaveClass('max-w_600px')

    // Check heading has expected styling
    const heading = screen.getByText('Contact Us')
    expect(heading).toBeInTheDocument()

    // Verify form button has correct styling
    const button = screen.getByText('Send Message')
    expect(button).toBeInTheDocument()
  })
})
