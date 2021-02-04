export interface CarUsageRecord {
    
    id:number;
    startedAt: Date;
    endedAt: Date;
    driverId:number;
    carId:number;  

}

export interface CarUsageRecords extends Array<CarUsageRecord> {}
