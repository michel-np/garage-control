import {    Driver } from './drivers.interface'

export interface Car {
    id: number;
    manufacturer:string;
    licensePlate:string;
    color:string;
    taken:boolean;
    currentDriver?: Driver
}

export interface Cars extends Array<Car>{}