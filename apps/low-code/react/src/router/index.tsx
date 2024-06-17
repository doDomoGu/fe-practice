import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import Projects from '@/pages/projects'
import Editor from '@/pages/editor'
import Preview from '@/pages/preview'

export interface MyRouteObject {
  title?: string
}

export type MyRouter = RouteObject & MyRouteObject

export const router: Array<MyRouter> = [
  {
    path: '/',
    element: <Projects />,
    title: '项目列表'
  },
  {
    path: '/editor/:id',
    element: <Editor />,
    title: '编辑器'
  },
  {
    path: '/preview',
    element: <Preview />,
    title: '预览'
  }
]
