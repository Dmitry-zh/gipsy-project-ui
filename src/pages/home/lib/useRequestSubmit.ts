import { FormEvent, useCallback } from 'react'
import { useNavigate } from 'react-router'

function useRequestSubmit(question: string) {
  const navigate = useNavigate()

  const callback = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    if (!question?.length) return

    navigate('/tarot-reading', {
      state: { question },
    })
  }

  return useCallback(callback, [question, navigate])
}

export { useRequestSubmit }
