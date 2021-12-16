function arrayDiff(a, b) {
  let result = []
  
  a.forEach((el, index) => {
    if (!b.includes(el))
        result.push(el)
  })
  return result;
}