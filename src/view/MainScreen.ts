// import promptSync from 'prompt-sync';
// import Database from '../db/Database';
// import MainController from '../controller/MainController';
// import CarRegister from './CarRegister';

// export default class MainScreen {

//     private prompt = promptSync();
//     private control: MainController;
//     private carRegister: CarRegister;

//     constructor(control: MainController){
        
//         this.control = control;
//         this.carRegister = new CarRegister(control);
//         this.mainMenu();
//     }
//     public mainMenu(): void {
//         let continues: boolean = true;
//         while (continues) {


//             let choice = parseInt(this.prompt("Escolha:\n1. Cadastra Carro\n2. Cadastra Cliente\n3. Cadastra Venda\n4. Sair"));
//             switch (choice) {
//                 case 1:
//                     //abrir tela cadastro carro
//                     this.carRegister.addCar();
//                     break;
//                 case 2:
//                     console.log("escolheu 2");
//                     break;
//                 case 3:
//                     console.log("escolheu 3");
//                     break;
//                 case 4:
//                     continues = false;
//                     break;
//                 default:
//                     console.log("digite um numero válido");
//                     break;
//             }
//         }
//         console.log("SAIU");
//     }


// }