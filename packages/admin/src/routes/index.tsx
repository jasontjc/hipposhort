import { createBrowserRouter } from 'react-router-dom'
import { type Router } from '@remix-run/router'
import Layout from '@/layouts'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Manage from '@/pages/Manage'

// export default createBrowserRouter([
//   {
//     path: '/',
//     Component: Layout.Blank,
//     children: [
//       {
//         path: 'login',
//         element: <Login />
//       },
//       {
//         path: 't',
//         Component: Layout.Basic,
//         children: [
//           {
//             path: 'dashboard',
//             element: <Dashboard />
//           }
//         ]
//       }
//     ]
//   }
// ]) as Router
export default createBrowserRouter([
  {
    path: '/',
    Component: Layout.Blank,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'home',
        Component: Layout.Basic,
        element: <Home />
      },
      {
        path: 'manage',
        Component: Layout.Basic,
        children: [
          {
            path: 'account',
            element: <Manage.Account />
          },
          {
            path: 'role',
            element: <Manage.Role />
          },
          {
            path: 'menu',
            element: <Manage.Menu />
          }
        ]
      }
    ]
  }
]) as Router
