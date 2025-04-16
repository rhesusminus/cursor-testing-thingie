import { aboutStyles, headingStyles, sectionStyles } from '../components/About.styles'

export function About() {
  return (
    <div className={aboutStyles}>
      <h1 className={headingStyles}>About Us</h1>

      <section className={sectionStyles}>
        <h2>Our Mission</h2>
        <p>
          We are dedicated to creating innovative solutions that make a difference in people's
          lives. Our team works tirelessly to deliver high-quality products that exceed
          expectations.
        </p>
      </section>

      <section className={sectionStyles}>
        <h2>Our Team</h2>
        <p>
          Our diverse team brings together expertise from various fields, including software
          development, design, and product management. We believe in collaboration, continuous
          learning, and pushing the boundaries of what's possible.
        </p>
      </section>

      <section className={sectionStyles}>
        <h2>Contact</h2>
        <p>
          Have questions or want to learn more? Feel free to reach out to us at contact@example.com
          or visit our contact page.
        </p>
      </section>
    </div>
  )
}
