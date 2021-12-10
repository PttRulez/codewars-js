function longest(s1, s2) {
  let arr = (s1+s2).split('').sort();
  let filtered = arr.filter((value, index, self) => {
             return self.indexOf(value) === index;
  })
  return filtered.join('');
}

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) // -> "abcdefklmopqwxy"
