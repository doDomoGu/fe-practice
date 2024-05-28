import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import Projects from '@/pages/projects'
import Editor from '@/pages/editor'
import Preview from '@/pages/preview'
// import RecommendList from '../pages/home/tabs/recommendList'

export interface MyRouteObject {
  title?: string
}

export type MyRouter = RouteObject & MyRouteObject

export const router: Array<MyRouter> = [
  {
    path: '/',
    element: <Projects />,
    title: '项目列表'
    // children: [
    // 	{ path: '', element: <RecommendList /> },
    // 	// { path: '', element: <div>推荐Tab</div> },
    // 	{ path: 'follow', element: <div>关注Tab</div> },
    // 	{ path: 'hot', element: <div>热榜</div> },
    // 	{ path: 'zvideo', element: <div>视频</div> }
    // ]
  },
  {
    path: '/editor/:id',
    element: <Editor />,
    title: '编辑器'
    // children: [{ path: 'learning', element: <div>教育</div> }]
  },
  {
    path: 'preview/:id',
    element: <Preview />,
    title: '预览'
  }
]
