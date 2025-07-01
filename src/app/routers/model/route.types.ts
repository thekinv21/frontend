import type { AppLayout } from '@/shared/enum'
import type { ReactNode } from 'react'

export type RouteType = {
  key: string
  path: string
  element: ReactNode
  layout: AppLayout
  hasAuthority: string[]
}
