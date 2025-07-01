import type { RouteType } from '../routers/model/route.types'

import { Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LayoutWrapper } from '@/widgets/app-layout'

import { Loader } from '@/shared/ui'

import { Routers } from '../routers/routes'
import { AuthProvider } from './AuthProvider'
import { PageAccessProvider } from './PageAccessProvider'

export default function ReactRouterProvider() {
  const { routes } = Routers()

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {routes.map((route: RouteType) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AuthProvider>
                  <LayoutWrapper layout={route.layout}>
                    <PageAccessProvider
                      hasAuthority={
                        Array.isArray(route.hasAuthority) &&
                        route.hasAuthority.length
                          ? route.hasAuthority
                          : []
                      }>
                      {route.element}
                    </PageAccessProvider>
                  </LayoutWrapper>
                </AuthProvider>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
