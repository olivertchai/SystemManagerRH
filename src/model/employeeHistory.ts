export default class EmployeeHistory{
  private event!: string; // Promoção , Transferêmcia 
  private eventDate! : Date;

  public constructor(event: string, eventDate: Date) {
    this.event = event;
    this.eventDate = eventDate;
  }
    
  // Getters
  public getEvent(): string { return this.event; }
  public getEventDate(): string { return this.eventDate.toLocaleDateString('pt-BR'); }
    
  // Setters
  public setEvent(event: string): void { this.event = event; }
  public setEventDate(eventDate: Date): void { this.eventDate = eventDate; }

  public displayData():string{
    return `${this.event} Data do evento: ${this.eventDate.toLocaleDateString(`pt-BR`)} `;
  } 
}