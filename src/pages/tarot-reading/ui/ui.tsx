import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { TarotReadingCardReveal } from '~/features/tarot-reading-cards-reveal'
import { API, TarotReadingParsed } from '~/shared/api'
import { Nullable } from '~/shared/model'

function TarotReading() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [apiResult, setApiResult] = useState<Nullable<TarotReadingParsed>>(null)
  const getTarotReading = async () => {
    const result = await API.getTarotReading(state.question)
    setApiResult(result)
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
      <TarotReadingCardReveal apiResult={apiResult} />
    </div>
  )
}

export { TarotReading }
