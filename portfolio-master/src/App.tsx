import { SnackbarProvider } from 'notistack'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './models'
import { SnackbarUtilitiesConfigurator } from './utilities'
import { lazy, Suspense } from 'react'
import { Spinner } from '@/components'
import PortfolioWrapper from './pages/Portfolio/wrapper/PortfolioWrapper'

const AboutMe = lazy(() => import('./pages/Portfolio/components/about-me/AboutMe'))
const Skills = lazy(() => import('./pages/Portfolio/components/skills/Skills'))
const Projects = lazy(() => import('./pages/Portfolio/components/projects/Projects'))
const Contact = lazy(() => import('./pages/Portfolio/components/contact/Contact'))

function App() {
  return (
    <div className='App'>
      <SnackbarProvider>
        <SnackbarUtilitiesConfigurator />
        <BrowserRouter>
          <Routes>
            <Route element={<PortfolioWrapper />}>
              <Route
                index
                element={
                  <Suspense fallback={<Spinner />}>
                    <AboutMe />
                  </Suspense>
                }
              />
              <Route
                path={PublicRoutes.ABOUTME}
                element={
                  <Suspense fallback={<Spinner />}>
                    <AboutMe />
                  </Suspense>
                }
              />
              <Route
                path={PublicRoutes.SKILLS}
                element={
                  <Suspense fallback={<Spinner />}>
                    <Skills />
                  </Suspense>
                }
              />
              <Route
                path={PublicRoutes.PROJECTS}
                element={
                  <Suspense fallback={<Spinner />}>
                    <Projects />
                  </Suspense>
                }
              />
              <Route
                path={PublicRoutes.CONTACT}
                element={
                  <Suspense fallback={<Spinner />}>
                    <Contact />
                  </Suspense>
                }
              />
            </Route>
            <Route path='*' element={<Navigate to={PublicRoutes.ABOUTME} replace />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
