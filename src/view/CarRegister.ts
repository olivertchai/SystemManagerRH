// import PromptSync from "prompt-sync";
// import Database from "../db/Database";
// import MainController from "../controller/MainController";
// import Car from "../model/Car";

// export default class CarRegister {

//     private prompt = PromptSync();
//     private control: MainController;


//     public constructor(control: MainController) {

//         this.control = control;

//     }

//     public addCar() {
//         //precisamos de um carro
//         let car: Car = this.control.getNewCar();
//         // pedir ao user os dados
//         let model: string = this.prompt("\ndigite o modelo do carro");
//         let year: number = parseInt(this.prompt("\ndigite o ano"));
//         // popular o objeto
//         car.setYear(year);
//         car.setModel(model);
//         //guardar o carro no banco
//         this.control.db.addNewCar(car);

//     }


// }

