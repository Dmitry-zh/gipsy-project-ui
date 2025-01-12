import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='min-w-screen max-w-screen flex max-h-screen min-h-screen flex-col'>
      <div className='justify-self-start'>Header</div>
      <div className='flex-1'>{children}</div>
      <div className='justify-self-end'>Footer</div>
    </div>
  )
}

export { Layout }
