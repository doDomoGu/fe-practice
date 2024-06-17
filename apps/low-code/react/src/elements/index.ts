// import TextInput from './text-input'
// import TitleText from './title-text'
import * as TextInput from './text-input'
import * as TitleText from './title-text'

export const configs = {
  [TextInput.config.componentName]: TextInput.config,
  [TitleText.config.componentName]: TitleText.config
}

export const components = {
  [TextInput.config.componentName]: TextInput.default,
  [TitleText.config.componentName]: TitleText.default
}

// export { default as ElementTextInput } from './text-input'
// export { default as ElementTitleText } from './title-text'
