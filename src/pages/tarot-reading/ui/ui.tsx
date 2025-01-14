import { TarotReadingCardReveal } from '~/features/tarot-reading-cards-reveal'

function TarotReading() {
  return (
    <div className='flex flex-1 flex-col'>
      <h1>Tarot Reading</h1>
      <TarotReadingCardReveal />
    </div>
  )
}

export { TarotReading }
