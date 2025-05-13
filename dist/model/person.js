"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    CPF;
    dateOfBirth;
    constructor(name, CPF, dateOfBirth) {
        this.name = name;
        this.CPF = CPF;
        this.dateOfBirth = dateOfBirth;
    }
    getName() { return this.name; }
    getCPF() { return this.CPF; }
    getDateOfBirth() { return this.dateOfBirth.toLocaleDateString('pt-BR'); }
    setName(name) {
        this.name = name;
    }
    setCPF(CPF) {
        this.CPF = CPF;
    }
    setDateOfBirth(dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    // Método sobrescrito em subclasses
    displayData() {
        return `Nome: ${this.name}, CPF: ${this.CPF}`;
    }
}
exports.default = Person;
