import { ICustomer } from "../Interfaces/ICustomer";
import { IVehicle } from "../Interfaces/IVehicle";
import { EnterpriseCustomer } from '../Customer/EnterpriseCustomer';
import { EnterpriseCar } from '../Vehicle/EnterpriseCar';

export class EnterpriseCustomerVehicleFactory{

    createCustomer(customerName: string): ICustomer{
        return new EnterpriseCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName): IVehicle{
        const costumer = this.createCustomer(customerName);
        return new EnterpriseCar(vehicleName, costumer);
    }
    
}