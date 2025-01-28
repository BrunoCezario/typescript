"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(name, email, birthDate) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.age = new Date().getFullYear() - birthDate.getFullYear();
    }
}
exports.default = Pessoa;
