import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import Home from '@/pages/Home.tsx'

export interface MyRouteObject {
  title?: string
}

export type MyRouter = RouteObject & MyRouteObject

export const router: Array<MyRouter> = [
  {
    path: '/',
    element: <Home />,
    title: 'demo'
  }
]
