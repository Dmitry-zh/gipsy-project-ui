type LLMPayload = {
  created: number // timestamp
  model: string // model name
  object: string // idk
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

interface TarotReadingResponseModel extends LLMPayload {
  choices: Array<{
    message: {
      content: string
      role: string // enum user | assistant
    }
    index: number
    finish_reason: string // enum stop | blacklist | ..etc
  }>
}

type TarotReadingParsed = {
  cards: { name: string; meaning: string }[]
  conclusion: string
  introduction: string
}

export type { TarotReadingParsed, TarotReadingResponseModel }
