import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import App from './App'
import './styles/index.less'

dayjs.locale('zh-cn')

bootstrap()

function bootstrap() {
  const app = document.querySelector('#app')

  if (!app) return

  const root = createRoot(app)

  root.render(
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  )
}
