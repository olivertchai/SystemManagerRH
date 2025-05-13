"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Position {
    position;
    description;
    salary;
    constructor(position, description, salary) {
        this.position = position;
        this.description = description;
        this.salary = salary;
    }
    // Getters
    getPosition() { return this.position; }
    getDescription() { return this.description; }
    getSalary() { return this.salary; }
    // Setters
    setPosition(position) { this.position = position; }
    setDescription(description) { this.description = description; }
    setSalary(salary) { this.salary = salary; }
    displayData() {
        return `${this.position} (R$ ${this.salary.toFixed(2)})`;
    }
}
exports.default = Position;
