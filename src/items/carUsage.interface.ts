export interface CarUsageRecord {

    id: number;
    startedAt: Date;
    endedAt?: Date;
    driverId: number;
    carId: number;
    usageReason: string;

}

export interface CarUsageRecords extends Array<CarUsageRecord> { }
