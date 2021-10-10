import { IVehicle } from '../Interfaces/IVehicle';
import { ICustomer } from '../Interfaces/ICustomer'

export class IndividualCar implements IVehicle{
    constructor(public name: string, private customer: ICustomer){}

    pickUp(): void{
        console.log(`${this.name} está buscando ${this.customer}`);
    }
} 