import IVehicle from '../Interfaces/IVehicle'

export abstract class VehicleFactory{

    /* Factory Method */
    /* In factory METHOD we delegates the creation details to subclasses that are supplied by the client.*/
    abstract getVehicle(vehicleName: string) : IVehicle;


    startDelivery(address: string, vehicleName: string) : IVehicle{

        /*Open/Closed Principle Violation*/
        //if(vehicleName == 'BMW'){}
        //if(vehicleName == 'BMX'){}

        const car = this.getVehicle(vehicleName);
        car.startDelivery(address);
        return car;
    }
}   