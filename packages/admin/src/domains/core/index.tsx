import React, {
  createContext,
  useContext,
  type ReactElement,
  type ReactNode
} from 'react'
import { observer } from 'mobx-react-lite'

export default {
  createContainer,
  composeContainers
}

/**
 * 创建unstated-next容器
 * @param hooks
 * @returns
 */
function createContainer<ContextProps, InitStateProps>(
  hooks: (props?: InitStateProps) => ContextProps
): {
  Provider: ({
    initState,
    children
  }: {
    initState?: InitStateProps
    children: ReactNode | ReactNode[]
  }) => ReactElement<ContextProps>
  useContainer: () => ContextProps
} {
  const Context = createContext<ContextProps | undefined>(undefined)

  const Provider = ({
    initState,
    children
  }: {
    initState?: InitStateProps
    children: ReactNode | ReactNode[]
  }): ReactElement<ContextProps> => (
    <Context.Provider value={hooks(initState)}>{children}</Context.Provider>
  )

  const useContainer = (): ContextProps => useContext<ContextProps>(Context)

  return {
    Provider: observer(Provider),
    useContainer
  }
}

/**
 * 组合unstated-next容器
 * @param containers
 * @returns
 */
function composeContainers(...containers) {
  const recur = (contexts, children, value) => {
    if (contexts.length > 0) {
      const [Comp, ...rest] = contexts

      return (
        <Comp.Provider initState={value}>
          {recur(rest, children, value)}
        </Comp.Provider>
      )
    }

    return children
  }

  return {
    Provider: ({ value, children }) => recur(containers, children, value)
  }
}
