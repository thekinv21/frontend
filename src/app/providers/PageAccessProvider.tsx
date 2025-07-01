import type { ReactNode } from 'react'

import { useEffect } from 'react'

import { UserRole } from '@/shared/enum'
import { getCookie, useRoute } from '@/shared/hooks'

type PageAccessProviderProps = {
  hasAuthority: string[]
  children: ReactNode
}

export function PageAccessProvider({
  children,
  hasAuthority
}: PageAccessProviderProps) {
  const { USER_ROLES } = getCookie()
  const { route } = useRoute()

  const HAS_ADMIN_ROLE =
    USER_ROLES?.includes(UserRole.ADMIN) ||
    USER_ROLES?.includes(UserRole.SUPER_ADMIN)

  const publicPages = hasAuthority.length === 0

  const hasAllow =
    HAS_ADMIN_ROLE ||
    USER_ROLES?.some((role: string) => hasAuthority.includes(role))

  useEffect(() => {
    if (!hasAllow && !publicPages) {
      route('/access-denied', { replace: true })
    }
  }, [route, hasAllow, publicPages])

  if (!hasAllow && !publicPages) return null

  return children
}
