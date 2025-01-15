import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import { TarotCard } from '~/entities/tarot-card'
import { cn } from '~/shared/lib/cn'

import { useCardFitToScreen, useCardsAppear } from '../lib'

function TarotReadingCardReveal() {
  const [card1, card2, card3] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
  const container = useRef<HTMLDivElement>(null)
  const fitContainer = useRef<HTMLDivElement>(null)
  const cardsAppeared = useCardsAppear(container, card1, card2, card3)
  const { toggleOnMainScreen } = useCardFitToScreen(
    fitContainer,
    [card1, card2, card3],
    cardsAppeared,
  )

  useEffect(() => {
    if (!cardsAppeared) return

    const tl = gsap
      .timeline()
      .to(card2.current, {
        duration: 0.5,
        rotateY: 90,
        onComplete: () => {
          card2.current!.querySelector('img')!.src = '/bobr.png'
        },
      })
      .to(card2.current, {
        duration: 0.5,
        rotateY: 0,
      })
  }, [cardsAppeared])

  return (
    <div ref={container} className='flex h-full w-full flex-1 flex-col'>
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
