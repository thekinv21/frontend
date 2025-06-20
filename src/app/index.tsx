import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { scan } from 'react-scan'

import './index.css'

import { APP_MODE } from '@/shared/config'

import { Providers } from './providers/index'

scan({
  enabled: APP_MODE === 'development'
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
)
