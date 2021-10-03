import { Car } from './Car'

/* Now imagine if we instanteate alot of Cars and Biclycles.
After that we need do changes in Car class, now we need to change all references to Car in code. */
const bmw = new Car('BMW');
bmw.startDelivery('132, My Street, Bigtown BG23 4YZ');
bmw.stop();
/* it generate Coupling */
