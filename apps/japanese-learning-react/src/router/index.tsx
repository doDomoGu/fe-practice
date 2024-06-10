import React from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import FiftyTone from '@/pages/fifty-tone'

export interface MyRouteObject {
  title?: string
}

export type MyRouter = RouteObject & MyRouteObject

export const router: Array<MyRouter> = [
  {
    path: '/',
    element: <Home />,
    title: '日语学习'
    // children: [
    // 	{ path: '', element: <RecommendList /> },
    // 	// { path: '', element: <div>推荐Tab</div> },
    // 	{ path: 'follow', element: <div>关注Tab</div> },
    // 	{ path: 'hot', element: <div>热榜</div> },
    // 	{ path: 'zvideo', element: <div>视频</div> }
    // ]
  },
  {
    path: '/fifty-tone',
    element: <FiftyTone />,
    title: '五十音图'
  }
]
