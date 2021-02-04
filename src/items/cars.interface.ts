import {    Driver } from './drivers.interface'

export interface Car {
    id: number;
    manufacturer:string;
    licensePlate:string;
    color:string;
    taken:boolean;
    currentDriverId?: number | null;
}

export interface Cars extends Array<Car>{}