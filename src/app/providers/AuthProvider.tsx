import type { ReactNode } from 'react'

import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { getCookie, useRoute } from '@/shared/hooks'

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [hasRedirect, setHasRedirect] = useState<boolean>(true)

  const { accessToken, user, isAdmin } = getCookie()
  const { route } = useRoute()
  const location = useLocation()

  const publicRoutes: string[] = []

  const isAuth = Boolean(accessToken && user)
  const isLoginPage = location.pathname === '/auth/login'
  const isPublicPage = publicRoutes.includes(location.pathname)

  useEffect(() => {
    // if user is not authenticated and not on login page and not on public page

    if (!isAuth && !isLoginPage && !isPublicPage) {
      route('/auth/login', { replace: true })
    }

    // if user is authenticated and on login page
    else if (isAuth && isLoginPage) {
      route(isAdmin ? '/admin/dashboard' : '/home', { replace: true })
    }

    // if page is not redirecting yet
    else {
      const timeout = setTimeout(() => setHasRedirect(false), 0)
      return () => clearTimeout(timeout)
    }
  }, [route, location.pathname, isAuth, isAdmin, isLoginPage, isPublicPage])

  if (hasRedirect) return null

  return children
}
