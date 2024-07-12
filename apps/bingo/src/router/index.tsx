import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import Paper from '@/pages/paper'
// import FiftyTone from '@/pages/fifty-tone'

export interface MyRouteObject {
  title?: string
}

export type MyRouter = RouteObject & MyRouteObject

export const router: Array<MyRouter> = [
  {
    path: '/',
    element: <Home />,
    title: 'BINGO'
  },
  {
    path: '/paper',
    element: <Paper />,
    title: '游戏纸'
  }
  // {
  //   path: '/fifty-tone',
  //   element: <FiftyTone />,
  //   title: '五十音图'
  // }
]
