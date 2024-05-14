import React, { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'

const BlankLayout: FC = () => {
  return (
    <div className={styles.Container}>
      <Outlet />
    </div>
  )
}

export default BlankLayout
