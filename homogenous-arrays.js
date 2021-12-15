function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  let result = []
  arrays.forEach(arr => {
    if (arr.length == 0)
      return
    let type = typeof arr [0]
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] != type)
        return
    }
    result.push(arr)
  });
  
  return result
}