import Address from "./Address";
import Person from "./Person";

export default class Customer extends Person {
  address: Address;

  constructor(name: string, email: string, birthDate: Date, address: Address) {
    super(name, email, birthDate);
    this.address = address;
  }

  isAdult() {
    return this.age >= 18;
  }

  getFirstName() {
    return this.name.split(" ")[0];
  }
}
