import { Route, Routes } from 'react-router'

import { PageTarotReading } from '~/pages/index'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<PageTarotReading />} />
    </Routes>
  )
}

export { Router }
