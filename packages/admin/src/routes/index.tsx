import { createBrowserRouter } from 'react-router-dom'
import { type Router } from '@remix-run/router'
import Layout from '@/layouts'
import Login from '@/pages/Login'

export default createBrowserRouter([
  {
    path: '/',
    Component: Layout.Blank,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]) as Router
