import { ICustomer } from '../Interfaces/ICustomer'

export class IndividualCustomer implements ICustomer{
    constructor(public name: string){}
}