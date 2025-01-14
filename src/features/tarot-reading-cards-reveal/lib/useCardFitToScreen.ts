import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { MutableRefObject, useState } from 'react'

function useCardFitToScreen(
  fitContainer: MutableRefObject<HTMLDivElement | null>,
  cards: MutableRefObject<HTMLDivElement | null>[],
  enabled: boolean,
) {
  const [onMainScreenCardIndex, setOnMainScreenCardIndex] = useState<
    null | number
  >(null)
  const [prevState, setPrevState] = useState<Flip.FlipState>()

  const toggleOnMainScreen = (index: number) => {
    const target = cards[index]

    if (!enabled) return

    if (typeof onMainScreenCardIndex === 'number') {
      /* move card on table */
      Flip.to(prevState!, {
        scale: true,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          // restore z.indexes
          gsap.set(target.current, { zIndex: index + 1 })
        },
      })

      return setOnMainScreenCardIndex(null)
    }

    setPrevState(Flip.getState(target.current))
    /* fit card to screen */
    Flip.fit(target.current, fitContainer.current, {
      duration: 0.3,
      ease: 'power2.inOut',
      absolute: true,
      scale: true,
      onStart: () => {
        // render card upper
        gsap.set(target.current, { zIndex: 10 })
        setOnMainScreenCardIndex(index)
      },
    })
  }

  return { onMainScreenCardIndex, toggleOnMainScreen }
}

export { useCardFitToScreen }
