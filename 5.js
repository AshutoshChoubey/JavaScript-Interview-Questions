function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  console.log(this.firstName)
}

const member = new Person('World', 'Gyan');
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member);
console.log(Person("World","b"));
console.log(firstName);