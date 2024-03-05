import React, { ReactNode } from 'react'
import { Route as RawRoute } from 'react-router-dom'

import { ErrorBoundary } from '../common/ErrorBoundary'

interface RouteProps {
  path: string
  children: ReactNode
}

export const Route: React.FC<RouteProps> = props => {
  return (
    <ErrorBoundary catch={(e, _i) => console.error(e.message)}>
      <RawRoute path={props.path} element={props.children} />
    </ErrorBoundary>
  )
}
