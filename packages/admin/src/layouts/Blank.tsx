import React, { useEffect, type FC } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import styles from './index.module.less'
import { contexts } from '@/domains'

const { GlobalContext } = contexts

const BlankLayout: FC = () => {
  const { isLogin } = GlobalContext.useContainer()
  const navigate = useNavigate()

  useEffect((): void => {
    if (isLogin) {
      navigate('/home', {
        replace: true
      })

      return
    }

    navigate('/login')
  }, [isLogin])

  return (
    <div className={styles.Container}>
      <Outlet />
    </div>
  )
}

export default observer(BlankLayout)
