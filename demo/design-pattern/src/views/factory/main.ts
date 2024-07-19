function ButtonFactory(type) {
  switch (type) {
    case 'primary':
      return new PrimaryButton()
    case 'secondary':
      return new SecondaryButton()
    case 'link':
      return new LinkButton()
    default:
      throw new Error('Unknown button type: ' + type)
  }
}

class Button {
  type: string
  text: string
  count: number

  constructor() {
    this.type = 'button'
    this.text = 'default'
    this.count = 0
  }

  onClick() {
    this.count++
  }
}

class PrimaryButton extends Button {
  constructor() {
    super()
    this.type = 'primary'
    this.text = 'Click me!'
  }
  onClick() {
    super.onClick()
    console.log('Primary button clicked!')
  }
}

class SecondaryButton extends Button {
  constructor() {
    super()
    this.type = 'secondary'
    this.text = 'Click me too!'
  }
  onClick() {
    super.onClick()
    console.log('Secondary button clicked!')
  }
}

class LinkButton extends Button {
  constructor() {
    super()
    this.type = 'link'
    this.text = 'Click me as well!'
  }
  onClick() {
    super.onClick()
    console.log('Link button clicked!')
  }
}

// function SecondaryButton() {
//   this.type = 'secondary'
//   this.text = 'Click me too!'
//   this.onClick = function () {
//     console.log('Secondary button clicked!')
//   }
// }

// function LinkButton() {
//   this.type = 'link'
//   this.text = 'Click me as well!'
//   this.onClick = function () {
//     console.log('Link button clicked!')
//   }
// }

export default ButtonFactory
