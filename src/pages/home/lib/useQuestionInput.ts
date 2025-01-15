import { ChangeEventHandler, useState } from 'react'

function useQuestionInput() {
  const [question, setQuestion] = useState<string>('')

  const handleInput: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setQuestion(evt.target.value)
  }

  return { question, handleInput }
}

export { useQuestionInput }
