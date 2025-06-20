import { Toaster } from 'sonner'

import { useTabletAndBelowMediaQuery } from '@/shared/hooks'

export const ToastProvider = () => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  return (
    <Toaster
      position={isTabletAndBelow ? 'top-center' : 'bottom-right'}
      richColors
      closeButton
      duration={5000}
      // theme={theme === 'dark' ? 'dark' : 'light'}
      className='text-balance'
    />
  )
}
