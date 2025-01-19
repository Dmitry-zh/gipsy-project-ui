import { MutableRefObject, useEffect, useMemo, useState } from 'react'

import { TarotReadingParsed } from '~/shared/api'
import { Nullable } from '~/shared/model'

import { TarotReadingTableStatus } from '../config'

import { useCardsAppear } from './useCardsAppear'
import { useCardsRevealing } from './useCardsRevealing'

function useTableCards({
  cards,
  container,
  detailsContainer,
  apiResult,
}: {
  cards: MutableRefObject<Nullable<HTMLDivElement>>[]
  container: MutableRefObject<Nullable<HTMLDivElement>>
  detailsContainer: MutableRefObject<Nullable<HTMLDivElement>>
  apiResult?: Nullable<TarotReadingParsed>
}) {
  const [status, setStatus] = useState<TarotReadingTableStatus>(
    TarotReadingTableStatus.Init,
  )
  const cardsAppeared = useCardsAppear(container, cards[0], cards[1], cards[2])

  const setRevealed = () => setStatus(TarotReadingTableStatus.Revealed)

  const { nextButtonPressed, revealedCardIndex } = useCardsRevealing(
    { cards },
    setRevealed,
    status === TarotReadingTableStatus.Revealing,
  )

  const title = useMemo(() => {
    if (status !== TarotReadingTableStatus.Revealing) return null

    return apiResult?.cards[revealedCardIndex]?.name
  }, [status, revealedCardIndex, apiResult])

  const caption = useMemo(() => {
    if (status === TarotReadingTableStatus.Revealing && revealedCardIndex < 0) {
      return apiResult?.introduction
    }
    if (status === TarotReadingTableStatus.Revealed) {
      return apiResult?.conclusion
    }

    return apiResult?.cards[revealedCardIndex]?.meaning
  }, [status, revealedCardIndex, apiResult])

  /* Переводим в статус "появились" после начальной анимации */
  useEffect(() => {
    if (!cardsAppeared) return

    setStatus(TarotReadingTableStatus.Appeared)
  }, [cardsAppeared])

  /* Переводим в статус "вскрываем" после получения ответа из API */
  useEffect(() => {
    if (!apiResult) return

    setStatus(TarotReadingTableStatus.Revealing)
  }, [apiResult])

  return { nextButtonPressed, title, caption }
}

export { useTableCards }
