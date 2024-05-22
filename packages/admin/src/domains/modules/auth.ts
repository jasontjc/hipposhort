import { useLocalObservable } from 'mobx-react-lite'
import Container from '../core'

type Store = {
  username: string
  password: string
  loginType: 'password' | 'qrcode'
}

type Func = {
  changeUsername: (val: string) => void
  changePassword: (val: string) => void
  doLogin: () => Promise<boolean>
}

const authContext = (): Store & Func => {
  const store = useLocalObservable<Store>(() => ({
    username: '',
    password: '',
    loginType: 'password'
  }))

  const changeUsername = (val: string): void => {
    store.username = val
  }

  const changePassword = (val: string): void => {
    store.password = val
  }

  const doLogin = (): Promise<boolean> => {
    return new Promise((resolve, reject): void => {
      if (!store.username) {
        reject(new Error('请输入登录账号'))
      }
      if (!store.password) {
        reject(new Error('请输入登录密码'))
      }

      resolve(true)
    })
  }

  return Object.assign(store, {
    changeUsername,
    changePassword,
    doLogin
  })
}

export default Container.createContainer<Store & Func, undefined>(authContext)
