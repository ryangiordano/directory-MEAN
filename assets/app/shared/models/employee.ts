export class Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  branch: string;
  picture: string;
  _id: string;
  constructor(firstName: string, lastName: string, email: string, phone?: string, title?: string, branch?: string, picture?: string, _id?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.title = title;
    this.branch = branch;
    this.picture = picture;
    this._id = _id;
  }
}
