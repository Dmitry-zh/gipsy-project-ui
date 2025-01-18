import { responseFixture } from '~/shared/api/config/responseFixture'

import { client } from '../config'
import { TarotReadingParsed, TarotReadingResponseModel } from '../model'

const parseTarotResponse = ({
  choices,
}: TarotReadingResponseModel): TarotReadingParsed => {
  const content = choices.at(0)?.message?.content ?? ''

  return JSON.parse(content.replace('```json', '').replace('```', ''))
}

const getTarotReading = (question: string): Promise<TarotReadingParsed> =>
  client
    .post<TarotReadingResponseModel>('/tarot-reading', { question })
    .then(({ data }) => parseTarotResponse(data))
    .catch(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(parseTarotResponse(responseFixture[0]))
        }, 3000)
      })
    })

export { getTarotReading }
