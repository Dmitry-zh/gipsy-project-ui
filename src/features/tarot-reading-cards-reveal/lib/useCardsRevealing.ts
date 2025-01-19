import gsap from 'gsap'
import { MutableRefObject, useEffect, useState } from 'react'

import { Nullable } from '~/shared/model'

function useCardsRevealing(
  { cards }: { cards: MutableRefObject<Nullable<HTMLDivElement>>[] },
  setRevealed: CallableFunction,
  ready: boolean,
) {
  const [isBlockedNextButton, setIsBlockedNextButton] = useState(false)
  const [revealedCardIndex, setRevealedCardIndex] = useState<number>(-1)

  const nextButtonPressed = () => {
    if (!ready) return
    if (isBlockedNextButton) return
    if (revealedCardIndex > 1) {
      return setRevealed()
    }
    setRevealedCardIndex(revealedCardIndex + 1)
  }

  const reveal = (index: number) => {
    setIsBlockedNextButton(true)

    return gsap
      .timeline()
      .to(cards[index].current, {
        duration: 0.5,
        rotateY: 90,
        onComplete: () => {
          cards[index].current!.querySelector('img')!.src = '/bobr.png'
        },
      })
      .to(cards[index].current, {
        duration: 0.5,
        rotateY: 0,
        onComplete: () => setIsBlockedNextButton(false),
      })
  }

  useEffect(() => {
    if (revealedCardIndex >= 0) {
      reveal(revealedCardIndex)
    }
  }, [revealedCardIndex])

  return { nextButtonPressed, revealedCardIndex }
}

export { useCardsRevealing }
