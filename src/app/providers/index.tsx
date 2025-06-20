import { QueryClientProvider } from './QueryClientProvider'
import { ToastProvider } from './ToastProvider'

export const Providers = () => (
  <QueryClientProvider>
    <ToastProvider />
    <main>React Starter Application</main>
  </QueryClientProvider>
)
