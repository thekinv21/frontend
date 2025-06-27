import type { TypeRoute } from './model/route.types'

import { StarterPage } from '@/pages/starter'

import { LayoutEnum } from './enum/layout.enum'

export const Routers = () => {
  const routes: TypeRoute[] = [
    {
      key: 'home',
      path: '/',
      element: <StarterPage />,
      layout: LayoutEnum.DEFAULT,
      hasAuthority: []
    }
  ]

  return { routes }
}
