import { CarFactory } from './Factory/CarFactory'

/* Coupling */
/*const bmw = new Car('BMW');
bmw.startDelivery('132, My Street, Bigtown BG23 4YZ');
bmw.stop();*/


/*Using Factory Method */
const carFactory = new CarFactory();
const bmw = carFactory.getVehicle('BMW');
bmw.startDelivery('132, My Street, Bigtown BG23 4YZ');
bmw.stop();



