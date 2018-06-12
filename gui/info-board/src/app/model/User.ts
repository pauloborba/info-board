export default User {
  firstName: String;
  lastName: String;
  userId: String;

  constructor(firstName: String, lastName: String, userId: String) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userId = userId;
  }
}
