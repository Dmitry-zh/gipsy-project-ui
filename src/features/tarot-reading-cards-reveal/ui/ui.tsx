import { useRef } from 'react'

import { TarotCard } from '~/entities/tarot-card'
import { TarotReadingParsed } from '~/shared/api'
import { cn } from '~/shared/lib/cn'
import { Nullable } from '~/shared/model'
import { Button } from '~/shared/shadcn/ui/button'

import { useCardFitToScreen, useTableCards } from '../lib'

function TarotReadingCardReveal({
  apiResult,
}: {
  apiResult: Nullable<TarotReadingParsed>
}) {
  const [card1, card2, card3] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const container = useRef<HTMLDivElement>(null)
  const fitContainer = useRef<HTMLDivElement>(null)

  const { nextButtonPressed, title, caption } = useTableCards({
    cards: [card1, card2, card3],
    detailsContainer: fitContainer,
    apiResult,
    container,
  })

  const { toggleOnMainScreen } = useCardFitToScreen(
    fitContainer,
    [card1, card2, card3],
    false,
  )

  return (
    <div ref={container} className='flex h-full w-full flex-1 flex-col'>
      <div className='absolute z-0 h-full w-full'>
        <img className='h-full w-full' src='/table.png' />
      </div>
      <div className='relative flex h-[60vh] max-h-[60vh]'>
        <TarotCard
          ref={card1}
          className='card_1 left-4 z-[1] h-1/2'
          onClick={() => toggleOnMainScreen(0)}
        />
        <TarotCard
          ref={card2}
          className='card_2 left-[30%] z-[2] h-1/2'
          onClick={() => toggleOnMainScreen(1)}
        />
        <TarotCard
          ref={card3}
          className='card_3 left-[60%] z-[3] h-1/2'
          onClick={() => toggleOnMainScreen(2)}
        />
      </div>

      <div className='z-[1]'>
        <p>{title}</p>
        <p>{caption}</p>
        <Button onClick={nextButtonPressed}>next</Button>
      </div>

      <div
        ref={fitContainer}
        className={cn(
          'absolute left-1/2 top-1/2 z-0 h-screen w-screen translate-x-[-50%] translate-y-[-50%]',
        )}
      />
    </div>
  )
}

export { TarotReadingCardReveal }
