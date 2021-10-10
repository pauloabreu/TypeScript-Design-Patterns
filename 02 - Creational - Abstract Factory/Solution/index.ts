import { EnterpriseCustomerVehicleFactory } from "./Factories/EnterpriseCustomerVehicleFactory";
import { IndividualCustomerVehicleFactory } from "./Factories/IndividualCustomerVehicleFactory";

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('BMW', 'Joao');
const car2 = individualFactory.createVehicle('Mercedes', 'Pedro');

car1.pickUp();
car2.pickUp();
