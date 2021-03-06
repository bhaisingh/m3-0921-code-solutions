/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  // Student.prototype.getFullName = function () {
  getFullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  // Student.prototype.getIntroduction = function () {
  getIntroduction() {
    const { subject } = this;
    const fullName = this.getFullName();
    return `Hello, my name is ${fullName} and I am studying ${subject}.`;
  }

}
