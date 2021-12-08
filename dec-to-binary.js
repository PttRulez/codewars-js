function addBinary(a,b) {
  let dec = a + b;

  if(dec >= 0) {
    return dec.toString(2);
  } else {
    return (~dec).toString(2);
  }
}
