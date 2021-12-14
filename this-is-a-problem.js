function NameMe(first, last) {
  return {
    firstName: first,
    lastName: last,
    name: this.firstName + ' ' + this.lastName
  };
}

// Я не совсем понял как работает другой вариант. Причем видел это на freecode

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName  = last;
//   this.name = first + ' ' + last;
// }
