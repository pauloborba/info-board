export interface IUser {
  firstName: string;
  lastName: string;
  userId: string;
}

export default class User {
  firstName: String;
  lastName: String;
  userId: String;

  constructor(firstName: String, lastName: String, userId: String) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userId = userId;
  }
}
