// import Car from "../model/Car";
// import Invoice from "..model/Invoice";

// export default class Database {

//     private carDb: Car[] = [];
//     private sales: Sale[] = [];

//     public addNewCar(car: Car): void {
//         this.carDb.push(car);
//         this.listAll();
//     }
//     public getCar(index: number): Car {
//         return this.carDb[index];
//     }
//     public addNewSale(sale: Sale) {
//         this.sales.push(sale);
//     }
//     public listAllSales(): string {
//         let s: string = "";
//         for (let i = 0; i < this.sales.length; i++) {
//             const element = this.sales[i];
//             s += "\n" + element.getCar().getModel();
//             s += "\n" + element.getClient().getName();
//         }
//         return s;
//     }


//     public listAll() {
//         for (let index = 0; index < this.carDb.length; index++) {
//             const element = this.carDb[index];
//             console.log("\n" + element.getModel() + "  " + element.getYear())
//         }
//     }


// }