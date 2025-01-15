import { Route, Routes } from 'react-router'

import { PageHome, PageTarotReading } from '~/pages'

function Router() {
  return (
    <Routes>
      <Route path='/tarot-reading' element={<PageTarotReading />} />
      <Route path='/' element={<PageHome />} />
    </Routes>
  )
}

export { Router }
