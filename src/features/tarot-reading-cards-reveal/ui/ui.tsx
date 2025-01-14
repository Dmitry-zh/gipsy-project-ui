import gsap from 'gsap'
import { forwardRef, useEffect, useRef } from 'react'

import { cn } from '~/shared/lib'

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
        duration: 1,
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
        <Test
          ref={card1}
          className='card_1 left-4 z-[1]'
          onClick={() => toggleOnMainScreen(0)}
        />
        <Test
          ref={card2}
          className='card_2 left-[30%] z-[2]'
          onClick={() => toggleOnMainScreen(1)}
        />
        <Test
          ref={card3}
          className='card_3 left-[60%] z-[3]'
          onClick={() => toggleOnMainScreen(2)}
        />
      </div>
      {/*<div>*/}
      {/*  <button className='border-2 px-6 py-3 active:bg-slate-400'>add</button>*/}
      {/*</div>*/}

      <div
        ref={fitContainer}
        className={cn(
          'absolute left-1/2 top-1/2 z-0 h-screen w-screen translate-x-[-50%] translate-y-[-50%]',
        )}
      />
    </div>
  )
}

const Test = forwardRef<HTMLDivElement, { className?: string; onClick: any }>(
  ({ className, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(className, 'absolute h-full w-[36%] border-2 shadow-md')}
      >
        <img
          src='/placeholder.png'
          className='absolute h-full w-full'
          onClick={onClick}
        />
      </div>
    )
  },
)
Test.displayName = 'Test'

export { TarotReadingCardReveal }
