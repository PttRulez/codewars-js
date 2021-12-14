// return masked string
function maskify(cc) {
  if (cc.length <= 4)
    return cc
  
  let hashLength = cc.length - 4
  let hashPart = ''
  
  const numbersPart = cc.slice(-4)
  
  for (let i = 0; i < hashLength; i++) {
    hashPart += '#'
  }
  
  return hashPart + numbersPart
}