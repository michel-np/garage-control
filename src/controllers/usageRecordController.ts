import { CarUsageRecord, CarUsageRecords } from '../items/carUsage.interface';
import { Car, Cars } from '../items/cars.interface';
import { Driver, Drivers } from '../items/drivers.interface';
import { carUsageRecords, cars, drivers } from '../items/mockup-storage';



interface NewCarUsageRecord {
    startedAt: Date;
    driverId: number;
    carId: number;
    usageReason: string;
}

export const getCarUsageRecords = async (): Promise<object[]> => {
    try {
        let recordsList = carUsageRecords.map((record: CarUsageRecord) => {
            let car: Car | undefined = cars.find((car: Car) => car.id === record.carId);
            let driver: Driver | undefined = drivers.find((driver: Driver) => driver.id === record.driverId)
            return {
                id: record.id,
                startedAd: record.startedAt,
                endedAt: record.endedAt,
                car: car,
                driver: driver,
                usageReason: record.usageReason
            }
        })
        return recordsList;
    } catch (error) {
        throw new Error(error);
    }

}

export const addNewUsageRecord = async (payload: NewCarUsageRecord): Promise<string | undefined> => {
    try {
        let {
            startedAt,
            driverId,
            carId,
            usageReason
        }: NewCarUsageRecord = payload;
        //Checking whether the car OR the driver included in the request payload exists.
        let carIndex: number = cars.findIndex((car: Car) => car.id === carId);
        //if the findIndex javascript method doesn't find the index in the array, it returns -1.
        if (carIndex === -1) return 'Carro não encontrado.'
        let driverIndex: number = drivers.findIndex((driver: Driver) => driver.id === driverId);
        if (driverIndex === -1) return 'Motorista não encontrado';

        // Now checking whether said car is being used or if the driver already has a car assigned to them.
        if (cars[carIndex].taken === true) {
            /*
              let driver: Driver | undefined = drivers.find((driver: Driver) => cars[carIndex].currentDriverId === driver.id);
               return `Este carro já está sendo utilizado pelo motorista ${driver?.name}`                
             */
            return 'Veículo já sendo utilizado por um motorista.'

        }
        if (drivers[driverIndex].usingCar === true) {
            /*
              let car : Car | undefined = cars.find((car:Car) => drivers[driverIndex].currentCarId === car.id );
                return `Este motorista já está utilizando o veículo placa ${car?.licensePlate}`
              
             */
            return 'Este motorista já está utilizando um veículo.'
        }
        cars[carIndex] = {
            ...cars[carIndex],
            taken: true
        };
        drivers[driverIndex] = {
            ...drivers[driverIndex],
            usingCar: true,
            currentCarId: carId
        };
        carUsageRecords.push({
            id: carUsageRecords.length + 1,
            startedAt: new Date(startedAt),
            carId: carId,
            driverId: driverId,
            usageReason: usageReason
        })


        return 'Registro criado!'


    } catch (error) {
        throw new Error(error);
    }

}

/**
 * 
 * @param id of the record to be updated
 * @param endDate the date that will be added to the record meaning the cycle is already completed.
 */

export const updateUsageRecord = async (id: number, endDate: Date): Promise<string> => {
    let recordIndex: number = carUsageRecords.findIndex((record: CarUsageRecord) => record.id === id);
    let usedCarIndex: number = cars.findIndex((car: Car) => carUsageRecords[recordIndex].carId === car.id);
    let driverIndex: number = drivers.findIndex((driver: Driver) => carUsageRecords[recordIndex].driverId === driver.id);
    if (recordIndex != -1) {
        if (!carUsageRecords[recordIndex].endedAt) {
            //Changing car and driver statuses and updating the record itself.
            carUsageRecords[recordIndex] = {
                ...carUsageRecords[recordIndex],
                endedAt: endDate
            }
            cars[usedCarIndex] = {
                ...cars[usedCarIndex],
                taken: false,
                currentDriverId: null
            }
            drivers[driverIndex] = {
                ...drivers[driverIndex],
                usingCar: false,
                currentCarId: null
            }
        }
        else {
            return "Este registro já foi finalizado."
        }
        return 'Registro atualizado.'
    } else {
        return 'Registro de utilização não encontrado.'
    }


}

