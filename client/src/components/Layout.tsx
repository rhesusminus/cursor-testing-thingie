import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { footerStyles } from './Footer.styles'
import { layoutContainer, headerStyles, mainStyles } from './Layout.styles'

type LayoutProps = { children: React.ReactNode }

export function Layout({ children }: LayoutProps) {
  return (
    <div className={layoutContainer}>
      <header className={headerStyles}>
        <Navbar />
      </header>
      <main className={mainStyles}>{children}</main>
      <footer className={footerStyles}>
        <Footer />
      </footer>
    </div>
  )
}
