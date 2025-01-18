import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { TarotReadingCardReveal } from '~/features/tarot-reading-cards-reveal'
import { API } from '~/shared/api'

function TarotReading() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const getTarotReading = async () => {
    const res = await API.getTarotReading(state.question)
    console.log(res)
  }

  useEffect(() => {
    if (!state.question) {
      return navigate('/')
    }
    getTarotReading()
  }, [state.question])

  return (
    <div className='flex flex-1 flex-col'>
      <h1>Tarot Reading</h1>
      <TarotReadingCardReveal />
    </div>
  )
}

export { TarotReading }
