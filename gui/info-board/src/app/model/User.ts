export interface IUser {
  firstName:String;
  lastName:String;
  userId: String;
}

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
