
import { EnterpriseCustomer } from './Customer/EnterpriseCustomer';
import { EnterpriseCar } from './Vehicle/EnterpriseCar';
import { IndividualCar } from './Vehicle/IndividualCar';
import { IndividualCustomer } from './Customer/IndividualCustomer';


/* Now imagine if we instanteate alot of tbeses class.
After that we need do changes in concrete class, now we need to change all references to concrete class */
const costumer1 = new EnterpriseCustomer("Joao");
const car1      = new EnterpriseCar("BMW", costumer1);

const costumer2 = new IndividualCustomer("Pedro");
const car2      = new IndividualCar("Mercedes", costumer1);    

car1.pickUp();
car2.pickUp()