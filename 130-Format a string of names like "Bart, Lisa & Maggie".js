function list(names){
  if (names.length === 0)
    return ''
  if (names.length === 1)
    return names[0].name
  
  let last = names.splice(-1)[0].name

  return names.map(el => el.name).join(', ') + ' & ' + last
}