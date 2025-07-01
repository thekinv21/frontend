import type { ReactNode } from 'react'

import { useState } from 'react'

import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider
} from '@tanstack/react-query'

type QueryClientProviderProps = {
  children: ReactNode
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      })
  )

  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  )
}
