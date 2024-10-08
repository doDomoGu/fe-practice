import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import EditList from '@/pages/edit/List'
import Paper from '@/pages/paper'
import PaperPrint from '@/pages/paper/Print'
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
    path: '/edit',
    element: <EditList />,
    title: '编辑'
  },
  {
    path: '/paper',
    element: <Paper />,
    title: '游戏纸'
  },
  {
    path: '/paper/print/:key',
    element: <PaperPrint />,
    title: '打印游戏纸'
  }
  // {
  //   path: '/fifty-tone',
  //   element: <FiftyTone />,
  //   title: '五十音图'
  // }
]
