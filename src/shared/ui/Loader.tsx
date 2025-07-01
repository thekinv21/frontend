import { LoaderCircleIcon } from 'lucide-react'

import { cn } from '../lib'

export function Loader() {
  return (
    <div
      className='fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center
        backdrop-blur-md'>
      <LoaderCircleIcon
        className='animate-custom-spin text-primary transition-colors ease-linear'
        size={150}
        strokeWidth={1}
      />
    </div>
  )
}

type SmallLoaderProps = {
  className?: string
}

export function SmallLoader({ className }: SmallLoaderProps) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <LoaderCircleIcon
        className={cn(
          'animate-custom-spin text-secondary-primary transition-colors ease-linear',
          className
        )}
        strokeWidth={1}
      />
    </div>
  )
}
