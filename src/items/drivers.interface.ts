import  {Car} from './cars.interface'

export interface Driver {
    id:number;
    name:string;
    usingCar:boolean;
    currentCarId?: Number;
}

export interface Drivers extends Array<Car> {};