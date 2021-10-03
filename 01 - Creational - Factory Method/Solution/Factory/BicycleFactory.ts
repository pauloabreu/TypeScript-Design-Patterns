import IVehicle from "../Interfaces/IVehicle";
import { VehicleFactory } from "./VehicleFactory";
import { Bicycle } from "../Bicycle"

export class BicycleFactory extends VehicleFactory{

    /* Sub-Class : Define creation details*/
    getVehicle(vehicleName : string) : IVehicle{
        return new Bicycle(vehicleName);
    }
}
