import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import Projects from '@/pages/projects'
import Editor from '@/pages/editor'
import EditorCanvas from '@/pages/editor-canvas'

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
    path: '/edit-canvas/:id',
    element: <EditorCanvas />,
    title: '编辑器-画布'
  }
]
