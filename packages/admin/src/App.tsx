import React, { type FC } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

const App: FC = () => {
  return <RouterProvider router={router} />
  // return <div>App</div>
}

export default App
