import Cookies from 'js-cookie'

import { UserRole } from '../enum'

export const getCookie = () => {
  const cookie = Cookies?.get('session-storage')
  const cookieObject = cookie ? JSON.parse(cookie) : null

  const user = cookieObject
    ? JSON.parse(cookieObject?.value)?.state?.user
    : null

  const accessToken = cookieObject
    ? JSON.parse(cookieObject?.value)?.state?.accessToken
    : null

  const refreshToken = cookieObject
    ? JSON.parse(cookieObject?.value)?.state?.refreshToken
    : null

  const USER_ROLES = user?.roles

  const isAdmin =
    USER_ROLES?.includes(UserRole.ADMIN) ||
    USER_ROLES?.includes(UserRole.SUPER_ADMIN)

  return {
    user,
    accessToken,
    USER_ROLES,
    isAdmin,
    refreshToken
  }
}
