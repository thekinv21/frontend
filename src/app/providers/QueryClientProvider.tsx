import type { PropsWithChildren } from 'react'

import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider
} from '@tanstack/react-query'

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
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
