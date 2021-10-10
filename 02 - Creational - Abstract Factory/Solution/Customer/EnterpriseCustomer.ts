import { ICustomer } from '../Interfaces/ICustomer'

export class EnterpriseCustomer implements ICustomer{
    constructor(public name: string){}
}