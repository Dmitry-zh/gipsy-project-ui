import './global.css'
import gsap from 'gsap'
import Flip from 'gsap/Flip'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from '~/widgets/layout'

import { Router } from '../config'

function App() {
  gsap.registerPlugin(Flip)

  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export { App }
