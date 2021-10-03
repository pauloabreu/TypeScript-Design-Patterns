import IVehicle from "./interfaces/IVehicle";

export class Bicycle implements IVehicle{
    constructor(private name: string) {}

    startDelivery(address){
        console.log(`Starting delivery at ${address} address.. it can take a long time..`);
    }

    stop(){
        console.log(`Delivery completed`);
    }
}   