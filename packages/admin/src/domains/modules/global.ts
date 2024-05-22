import { useLocalObservable } from 'mobx-react-lite'
import Container from '../core'

type Store = {
  isLogin: boolean
  isCollapsed: boolean
}

type Func = {
  changeLoginStatus: (val: boolean) => void
  toggleSidebar: () => void
}

const globalContext = (): Store & Func => {
  const store = useLocalObservable<Store>(() => ({
    isLogin: false,
    isCollapsed: false
  }))

  const changeLoginStatus = (val: boolean): void => {
    store.isLogin = val
  }

  const toggleSidebar = (): void => {
    store.isCollapsed = !store.isCollapsed
  }

  return Object.assign(store, {
    changeLoginStatus,
    toggleSidebar
  })
}

export default Container.createContainer<Store & Func, undefined>(globalContext)
