import React from 'react'
import { createRoot } from 'react-dom/client'
import { Route } from '../src/routes/index'
import '../src/styles.css'

// The static GitHub Pages entry renders the exact same homepage component
// as the Lovable/TanStack application, without a server or separate design.
const Homepage = Route.options.component as React.ComponentType

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)
