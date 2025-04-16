import { footerContainer, copyrightText } from './Footer.styles'

export function Footer() {
  return (
    <div className={footerContainer}>
      <p className={copyrightText}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  )
}
