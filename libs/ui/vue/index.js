// export * from './src/layouts'
export * from './src/components'
import * as components from './src/components'

export default {
  install: (app) => {
    for (const compName in components) {
      // console.log({ compName, components })
      app.use(components[compName])
    }
  }
}
