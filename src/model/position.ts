export default class Position{
    private position! :string;
    private description! :string;
    private salary!: number;

  public constructor(position: string, description: string, salary: number) {
    this.position = position;
    this.description = description;
    this.salary = salary;
  }
    
  // Getters
  public getPosition(): string { return this.position; }
  public getDescription(): string { return this.description; }
  public getSalary(): number { return this.salary; }
    
  // Setters
  public setPosition(position: string): void { this.position = position; }
  public setDescription(description: string): void { this.description = description; }
  public setSalary(salary: number): void { this.salary = salary; }

  public displayData(): string {
    return `${this.position} (R$ ${this.salary.toFixed(2)})`;
  }
}