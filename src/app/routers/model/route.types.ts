import type { ReactNode } from 'react'
import type { LayoutEnum } from '../enum/layout.enum'

export type TypeRoute = {
  key: string
  path: string
  element: ReactNode
  layout: LayoutEnum
  hasAuthority?: string[]
}
