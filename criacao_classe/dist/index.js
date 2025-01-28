"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
const customer1 = new Pessoa_1.default("Luiz", "contato@luiztools.com.br", new Date(1988, 4, 25));
console.log(customer1);
