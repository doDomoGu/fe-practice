list[0].children[0].children[0].href + list[0].children[0].children[1].innerHTML

for (let i = 1; i < list.length; i++) {
  // list[i].children[0].children[0].href = list[i].children[0].children[0].href+ '?pwd=' + list[i].children[0].children[1].innerHTML
  console.log(list[i].children[0].children[0].href)
}
