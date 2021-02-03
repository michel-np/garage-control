

export interface Driver {
    id:number;
    name:string;
    usingCar:boolean;
    currentCarId?: number | null;
}

export interface Drivers extends Array<Driver> {};