let listDom = document.getElementsByClassName('item_list')[0]

for (let l of listDom.children) {
  console.log(l.children[0].children[0].innerHTML)
  console.log(
    l.children[1].children[0].children[0].href +
      '?pwd=' +
      l.children[1].children[0].children[1].innerHTML
  )
  //   console.log(l.children[1].children[0].children[1].innerHTML) // pwd
}
