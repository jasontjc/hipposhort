import React, { type FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  SettingOutlined
} from '@ant-design/icons'
import styles from './index.module.less'
import { contexts } from '@/domains'

const { GlobalContext } = contexts

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: '/home',
    icon: <DashboardOutlined />,
    label: '首页'
  },
  {
    key: '/manage',
    icon: <SettingOutlined />,
    label: '系统管理',
    children: [
      { key: '/manage/account', label: '账号管理' },
      { key: '/manage/role', label: '角色管理' },
      { key: '/manage/menu', label: '菜单管理' }
    ]
  }
]

const BasicLayout: FC = () => {
  const { isCollapsed, toggleSidebar } = GlobalContext.useContainer()
  const navigate = useNavigate()

  const handleMenuClick = ({ key }): void => {
    navigate(key)
  }

  return (
    <div className={styles.BasicContainer}>
      <header className={isCollapsed ? styles.CollapsedHeader : styles.Header}>
        <div className={styles.HeaderInner}>
          <div className={styles.HeaderLeft}>
            <a className={styles.ToggleBtn} onClick={toggleSidebar}>
              {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </a>
          </div>
          <div className={styles.HeaderRight}></div>
        </div>
      </header>
      <div
        className={isCollapsed ? styles.CollapsedLayoutTab : styles.LayoutTab}
      >
        <div className={styles.LayoutTabInner}></div>
      </div>
      <aside className={isCollapsed ? styles.CollapsedSidebar : styles.Sidebar}>
        <div className={styles.SidebarInner}>
          <a className={styles.SystemName} href="/"></a>
          <div className={styles.SidebarContent}>
            <Menu
              mode="inline"
              inlineCollapsed={isCollapsed}
              items={items}
              onClick={handleMenuClick}
            />
          </div>
        </div>
      </aside>
      <main className={isCollapsed ? styles.CollapsedContent : styles.Content}>
        <div className={styles.ContentInner}>
          <Outlet />
        </div>
      </main>
      <footer className={isCollapsed ? styles.CollapsedFooter : styles.Footer}>
        <div className={styles.FooterInner}>
          <span className={styles.FooterTxt}>
            Copyright MIT © 2024 hipposhort
          </span>
        </div>
      </footer>
    </div>
  )
}

export default observer(BasicLayout)
