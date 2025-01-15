import { ComponentProps, forwardRef } from 'react'

import { cn } from '~/shared/lib/cn'

const TarotCard = forwardRef<
  HTMLDivElement,
  ComponentProps<'img'> & { className?: string }
>(({ className, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(className, 'absolute aspect-[3/5] border-2 shadow-md')}
    >
      <img
        src='/cards/back.png'
        className='absolute h-full w-full'
        onClick={onClick}
      />
    </div>
  )
})

TarotCard.displayName = 'TarotCard'

export { TarotCard }
