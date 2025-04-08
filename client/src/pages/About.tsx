import { css } from '../../styled-system/css'

const aboutStyles = css({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
})

const headingStyles = css({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  color: 'slate.900',
})

const sectionStyles = css({
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

export function About() {
  return (
    <div className={aboutStyles}>
      <h1 className={headingStyles}>About Us</h1>
      
      <section className={sectionStyles}>
        <h2>Our Mission</h2>
        <p>
          We are dedicated to creating innovative solutions that make a difference
          in people's lives. Our team works tirelessly to deliver high-quality
          products that exceed expectations.
        </p>
      </section>

      <section className={sectionStyles}>
        <h2>Our Team</h2>
        <p>
          Our diverse team brings together expertise from various fields,
          including software development, design, and product management.
          We believe in collaboration, continuous learning, and pushing
          the boundaries of what's possible.
        </p>
      </section>

      <section className={sectionStyles}>
        <h2>Contact</h2>
        <p>
          Have questions or want to learn more? Feel free to reach out to us
          at contact@example.com or visit our contact page.
        </p>
      </section>
    </div>
  )
} 