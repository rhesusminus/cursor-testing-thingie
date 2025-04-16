import { useState } from 'react'
import {
  contactContainer,
  heading,
  form,
  formGroup,
  label,
  input,
  textarea,
  submitButton,
} from './Contact.styles'

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
    <div className={contactContainer}>
      <h1 className={heading}>Contact Us</h1>

      <form onSubmit={handleSubmit} className={form}>
        <div className={formGroup}>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={input}
          />
        </div>

        <div className={formGroup}>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={input}
          />
        </div>

        <div className={formGroup}>
          <label htmlFor="message" className={label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className={textarea}
          />
        </div>

        <button type="submit" className={submitButton}>
          Send Message
        </button>
      </form>
    </div>
  )
}
