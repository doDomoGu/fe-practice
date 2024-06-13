export async function setupControlComponents(app) {
  // console.log('import.meta.glob', import.meta.glob('./**/index.vue')['./title-text/index.vue']())
  // console.log('import.meta', import.meta)
  const components = import.meta.glob('./**/index.vue')

  for (const path in components) {
    const comp = await components[path]()
    // console.log('comp', comp.default)
    // 全局注册组件
    app.component(
      comp.default.name,
      comp.default
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，否则回退到使用模块的根。
      // componentConfig.default || componentConfig
    )
  }

  // ['./title-text/index.vue']()
  // .then((v) => {
  //   console.log('default', v.default)
  // })
  // // 自动导入组件
  // const requireComponent = import.meta.globEager.context(
  //   // 其组件目录的相对路径
  //   './',
  //   // 是否递归
  //   true,
  //   // 匹配Vue文件
  //   /index\.vue/
  // )

  // console.log('requireComponent', requireComponent)

  // requireComponent.keys().forEach((fileName) => {
  //   // 获取组件配置
  //   const componentConfig = requireComponent(fileName)

  //   // 获取 PascalCase 命名法的组件名称
  //   const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')))

  //   // 全局注册组件
  //   Vue.component(
  //     componentName,
  //     // 如果这个组件选项是通过 `export default` 导出的，
  //     // 那么就会优先使用 `.default`，否则回退到使用模块的根。
  //     componentConfig.default || componentConfig
  //   )
  // })
}
