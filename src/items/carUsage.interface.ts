import { Car } from "./cars.interface";
import { Driver } from "./drivers.interface";

import {Driver, Drivers} from './drivers.interface';
import {Car} from './cars.interface'

export interface CarUsageRecord {
    
    id:number;
    startedAt: Date;
    endedAt: Date;
    driver:Driver;
    carUsed:Car;  

}