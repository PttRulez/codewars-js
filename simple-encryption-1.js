function encrypt(text, n) {
  if ((!text || text.length === 0 ) || n <=0)
    return text

  let arr = text.split('');

  for (let i = 1; i <= n; i++) {
    let odd = [];
    let even = [];

    for (let j = 0; j < arr.length; j++) {
      if (j % 2 == 0) {
        even.push(arr[j])
      } else {
        odd.push(arr[j])
      }
    }
    console.log(even, odd)
    arr = odd.concat(even)
  }

  return arr.join('')
}

function decrypt(text, n) {
  if ((!text || text.length === 0 ) || n <=0)
    return text

  for (let i = 1; i <= n; i++) {
    let start = Math.floor(text.length/2)
    let odd = text.slice(start).split('');
    let even = text.slice(0, start).split('')

    console.log(start, odd, even);

    text = odd.reduce((prev, cur, index) => {
      console.log(prev)
      let res = prev + cur;
      res = even[index] ? res + even[index] : res
      return res;
    }, '')
  }


  return text;
}

console.log(decrypt("s eT ashi tist!", 2));
