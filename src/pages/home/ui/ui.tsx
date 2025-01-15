import { Button } from '~/shared/shadcn/ui/button'
import { Input } from '~/shared/shadcn/ui/input'

import { useQuestionInput, useRequestSubmit } from '../lib'

function Home() {
  const { question, handleInput } = useQuestionInput()
  const onSubmit = useRequestSubmit(question)

  return (
    <div className='flex h-full w-full'>
      <div className='absolute inset-0 z-[0] h-full w-full'>
        <img className='h-full w-full object-cover' src='/entry.png' />
      </div>

      <div
        // todo: to class
        style={{ background: 'rgba(255, 255, 255, 0.28)' }}
        className='absolute left-1/2 top-[60%] z-[1] -translate-x-1/2 -translate-y-1/2 rounded-md shadow-2xl backdrop-blur-[2px]'
      >
        {/*  TODO: разделить на виджеты и фичи */}
        <div className='flex min-h-56 min-w-[90vw] max-w-[90vw] flex-col items-center gap-4 p-3'>
          <p className='w-3/4 text-center'>
            <span className='text-lg'>
              Задайте мне вопрос, и я сделаю расклад ТАРО
            </span>
          </p>
          <form
            className='flex flex-col items-center gap-3'
            onSubmit={onSubmit}
          >
            <Input value={question} onInput={handleInput} />
            <Button>Спросить</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Home }
