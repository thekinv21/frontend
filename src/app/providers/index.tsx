import { StarterPage } from '@/pages/starter'

import { QueryClientProvider } from './QueryClientProvider'
import { ToastProvider } from './ToastProvider'

export const Providers = () => (
  <QueryClientProvider>
    <ToastProvider />
    <StarterPage />
  </QueryClientProvider>
)
