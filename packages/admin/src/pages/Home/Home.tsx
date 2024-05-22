import React, { type FC } from 'react'
import { observer } from 'mobx-react-lite'
import styles from './index.module.less'

const Home: FC = () => {
  return <div className={styles.Container}>Home</div>
}

export default observer(Home)
