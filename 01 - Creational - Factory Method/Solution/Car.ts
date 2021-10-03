import IVehicle from "./interfaces/IVehicle";

export class Car implements IVehicle{
    constructor(private name: string) {}

    startDelivery(address){
        console.log(`Starting delivery at ${address} address...`);
    }

    stop(){
        console.log(`Delivery completed`);
    }
}       