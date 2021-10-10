import { ICustomer } from '../Interfaces/ICustomer';
import { IVehicle } from '../Interfaces/IVehicle';
import { IndividualCar } from '../Vehicle/IndividualCar';
import { IndividualCustomer } from '../Customer/IndividualCustomer';

export class IndividualCustomerVehicleFactory{

    createCustomer(customerName: string): ICustomer{
        return new IndividualCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName): IVehicle{
        const costumer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, costumer);
    }
    
}