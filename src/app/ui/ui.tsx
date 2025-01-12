import './global.css'
import { BrowserRouter } from 'react-router-dom'

import { Layout } from '~/widgets/layout'

import { Router } from '../config'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export { App }
