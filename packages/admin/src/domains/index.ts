import Container from './core'
import GlobalContext from './modules/global'
import AuthContext from './modules/auth'

const contexts = {
  GlobalContext,
  AuthContext
}

const Domains = Container.composeContainers.apply(
  undefined,
  Object.values({
    GlobalContext,
    AuthContext
  })
)

export { Domains, Container, contexts }
