export default () => {
  const element = document.createElement('h1')

  element.textContent = 'Hello zhaowa'
  element.addEventListener('click', () => {
    console.log('hello zhaowa console')
  })

  return element
}
