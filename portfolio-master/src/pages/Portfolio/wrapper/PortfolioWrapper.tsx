import BurguerButton from "@/components/BurguerButton/BurguerButton"
import { LanguageToggle } from "@/components"
import { useI18n } from "@/i18n"
import { NavLinks } from "@/models"
import { ColorSchemeActive } from "@/utilities"
import { useCallback, useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { MoonFill, SunFill } from "react-bootstrap-icons"
import { BgDiv, PortfolioWrapperNav } from "./styled-components/portfolioWrapper.styled"
import './styled-components/portfolioWrapperLink.styled.css'

function PortfolioWrapper() {
  const start = "<"
  const mid = "ME"
  const end = "/>"
  const location = useLocation()
  const { t } = useI18n()
  const [colorScheme, setColorScheme] = useState<string>(ColorSchemeActive())
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu whenever the route changes, so a tap on a link
  // never leaves the overlay covering the page it just navigated to.
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // The menu is a full-screen overlay on mobile, so lock body scroll while it is open.
  useEffect(() => {
    document.body.style.overflowY = menuOpen ? 'hidden' : 'auto'
    return () => { document.body.style.overflowY = 'auto' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  const handleClickTheme = useCallback(() => {
    const next = colorScheme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement

    // One class on <html> drives the cross-fade for the whole tree, instead of
    // walking every node in the document on each toggle.
    root.classList.add('theme-transition')
    window.setTimeout(() => root.classList.remove('theme-transition'), 1000)

    root.setAttribute('data-theme', next)
    localStorage.setItem('color-scheme', next)
    setColorScheme(next)
  }, [colorScheme])

  return (
    <>
      <a className="skip-link" href="#main-content">{t.a11y.skip}</a>
      <PortfolioWrapperNav>
        <h2>{start}<span>{mid}</span>{end}</h2>
        <div id="main-nav-links" className={`links ${menuOpen ? 'active' : ''}`}>
          {NavLinks.map(({ to, key }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'selectedLink'
                  : (menuOpen ? 'unselecetedLinkMob' : 'unselecetedLinkWeb')
              }
            >
              {t.nav[key]}
            </NavLink>
          ))}
        </div>
        <button
          id="switch"
          className="switch"
          onClick={handleClickTheme}
          aria-label={colorScheme === 'dark' ? t.a11y.toLight : t.a11y.toDark}
        >
          {colorScheme === 'dark' ? <SunFill size={25} /> : <MoonFill size={25} />}
        </button>
        <LanguageToggle />
        <div className="burguer">
          <BurguerButton
            clicked={menuOpen}
            handleClick={() => setMenuOpen((open) => !open)}
            label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
          />
        </div>
      </PortfolioWrapperNav>
      <BgDiv className={`initial ${menuOpen ? 'active' : ''}`} />
      <main id="main-content" className="main-container">
        <Outlet />
      </main>
    </>
  )
}

export default PortfolioWrapper
