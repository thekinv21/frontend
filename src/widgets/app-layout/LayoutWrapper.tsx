import type { ReactNode } from 'react'

import { AppLayout } from '@/shared/enum'

type LayoutWrapperProps = {
  layout: AppLayout
  children: ReactNode
}

type LayoutComponentProps = {
  children: ReactNode
}

export function LayoutWrapper({ children, layout }: LayoutWrapperProps) {
  const layoutComponents = {
    [AppLayout.DEFAULT]: () => <div>Default Layout</div>,
    [AppLayout.ADMIN]: () => <div>Admin Layout</div>,
    [AppLayout.BLANK]: ({ children }: LayoutComponentProps) => (
      <div>{children}</div>
    )
  }

  const LayoutComponent =
    layoutComponents[layout] || layoutComponents[AppLayout.BLANK]

  return <LayoutComponent>{children}</LayoutComponent>
}
