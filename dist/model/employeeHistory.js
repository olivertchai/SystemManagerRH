"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeHistory {
    event; // Promoção , Transferêmcia 
    eventDate;
    constructor(event, eventDate) {
        this.event = event;
        this.eventDate = eventDate;
    }
    // Getters
    getEvent() { return this.event; }
    getEventDate() { return this.eventDate.toLocaleDateString('pt-BR'); }
    // Setters
    setEvent(event) { this.event = event; }
    setEventDate(eventDate) { this.eventDate = eventDate; }
    displayData() {
        return `${this.event} Data do evento: ${this.eventDate.toLocaleDateString(`pt-BR`)} `;
    }
}
exports.default = EmployeeHistory;
