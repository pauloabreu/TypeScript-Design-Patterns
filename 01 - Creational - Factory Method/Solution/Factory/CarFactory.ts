import IVehicle from "../Interfaces/IVehicle";
import { VehicleFactory } from "./VehicleFactory";
import { Car } from "../Car"

export class CarFactory extends VehicleFactory{

    /* Sub-Class : Define creation details*/
    getVehicle(vehicleName : string) : IVehicle{
        return new Car(vehicleName);
    }
}
