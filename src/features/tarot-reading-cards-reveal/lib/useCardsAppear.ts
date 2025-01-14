import gsap from 'gsap'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

function useCardsAppear(
  container: MutableRefObject<HTMLDivElement | null>,
  card1: MutableRefObject<HTMLDivElement | null>,
  card2: MutableRefObject<HTMLDivElement | null>,
  card3: MutableRefObject<HTMLDivElement | null>,
) {
  const [appeared, setAppeared] = useState<boolean>(false)
  const tl = useRef<GSAPTimeline>()

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .fromTo(card1.current, { y: '-100vh' }, { duration: 1, y: 0 })
        // insert 1 second before end of timeline
        .fromTo(card2.current, { y: '-100vh' }, { duration: 1, y: 0 }, '-=0.5')
        // insert 1 second before end of timeline
        .fromTo(
          card3.current,
          { y: '-100vh' },
          {
            duration: 1,
            y: 0,
            onComplete: () => {
              setAppeared(true)
            },
          },
          '-=0.5',
        )
    }, container)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return appeared
}

export { useCardsAppear }
