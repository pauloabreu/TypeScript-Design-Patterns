import { ICustomer } from "../Interfaces/ICustomer";
import { IVehicle } from "../Interfaces/IVehicle";

export interface CustomerVehicleFactory{
    createCustomer(customerName: string): ICustomer;
    createVehicle(vehicleName: string, customerName): IVehicle;
}