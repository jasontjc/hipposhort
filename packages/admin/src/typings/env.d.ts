/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE_API: string
  // more env variables...
}

declare module '*.module.less' {
  const classes: { [className: string]: string }
  export default classes
}

declare global {
  interface Window {
    // __MICRO_APP_ENVIRONMENT__: string
    // __MICRO_APP_NAME__: string
    // __MICRO_APP_PUBLIC_PATH__: string
    // __MICRO_APP_BASE_ROUTE__: string
    // __MICRO_APP_BASE_APPLICATION__: string
  }
}
