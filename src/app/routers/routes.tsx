import type { RouteType } from './model/route.types'

import { StarterPage } from '@/pages/starter'

import { AppLayout } from '@/shared/enum'

export const Routers = () => {
  const routes: RouteType[] = [
    {
      key: 'home',
      path: '/',
      element: <StarterPage />,
      layout: AppLayout.DEFAULT,
      hasAuthority: []
    }
  ]

  return { routes }
}
