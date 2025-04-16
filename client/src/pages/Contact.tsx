import { useState } from 'react'
import { css } from '../../styled-system/css'
import { container, flex } from '../../styled-system/patterns'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className={container({ maxW: '600px' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold', mb: '6' })}>Contact Us</h1>

      <form onSubmit={handleSubmit} className={flex({ direction: 'column', gap: '4' })}>
        <div className={flex({ direction: 'column', gap: '2' })}>
          <label htmlFor="name" className={css({ fontWeight: 'medium' })}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={css({
              p: '2',
              border: '1px solid',
              borderColor: 'gray.300',
              rounded: 'md',
              '&:focus': {
                outline: 'none',
                borderColor: 'blue.500',
                ring: '1px',
                ringColor: 'blue.500',
              },
            })}
          />
        </div>

        <div className={flex({ direction: 'column', gap: '2' })}>
          <label htmlFor="email" className={css({ fontWeight: 'medium' })}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={css({
              p: '2',
              border: '1px solid',
              borderColor: 'gray.300',
              rounded: 'md',
              '&:focus': {
                outline: 'none',
                borderColor: 'blue.500',
                ring: '1px',
                ringColor: 'blue.500',
              },
            })}
          />
        </div>

        <div className={flex({ direction: 'column', gap: '2' })}>
          <label htmlFor="message" className={css({ fontWeight: 'medium' })}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={css({
              p: '2',
              border: '1px solid',
              borderColor: 'gray.300',
              rounded: 'md',
              resize: 'vertical',
              '&:focus': {
                outline: 'none',
                borderColor: 'blue.500',
                ring: '1px',
                ringColor: 'blue.500',
              },
            })}
          />
        </div>

        <button
          type="submit"
          className={css({
            mt: '4',
            p: '2',
            bg: 'blue.600',
            color: 'white',
            rounded: 'md',
            fontWeight: 'medium',
            cursor: 'pointer',
            '&:hover': {
              bg: 'blue.700',
            },
            '&:focus': {
              outline: 'none',
              ring: '2px',
              ringColor: 'blue.500',
            },
          })}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
