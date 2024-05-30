import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './Logic/Routes/routes'

export default function App() {
  const _router = useRoutes(routes)
  return _router
}
