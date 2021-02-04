import { Cars } from './cars.interface';
import { Drivers } from './drivers.interface';
import { CarUsageRecords } from './carUsage.interface'


export const cars: Cars = [
    {
        id: 1,
        manufacturer: 'VOLKSWAGEN',
        color: 'Azul',
        licensePlate: 'AAA-0000',
        taken: false,
        currentDriverId: null
    },
    {
        id: 2,
        manufacturer: 'FIAT',
        color: 'Azul',
        licensePlate: 'BBB-1111',
        taken: false,
        currentDriverId: null
    },
    {
        id: 3,
        manufacturer: 'FORD',
        color: 'Azul',
        licensePlate: 'CCC-2222',
        taken: true,
        currentDriverId: 3
    },
    {
        id: 4,
        manufacturer: 'CHEVROLET',
        color: 'Azul',
        licensePlate: 'DDD-3333',
        taken: false,
        currentDriverId: 2
    },
    {
        id: 5,
        manufacturer: 'PEUGEOT',
        color: 'Azul',
        licensePlate: 'EEE-4444',
        taken: false,
        currentDriverId: null
    },
    {
        id: 6,
        manufacturer: 'HYUNDAI',
        color: 'Azul',
        licensePlate: 'FFF-5555',
        taken: false,
        currentDriverId: null
    },
];

export const drivers: Drivers = [
    {
        id: 1,
        name: 'Sergio Augusto',
        usingCar: false,
        currentCarId: null
    },
    {
        id: 2,
        name: 'Paulo Ricardo',
        usingCar: true,
        currentCarId: 4
    },
    {
        id: 3,
        name: 'José Carlos',
        usingCar: true,
        currentCarId: 3
    },
    {
        id: 4,
        name: 'Sergio Augusto',
        usingCar: false,
        currentCarId: null
    }
];

export const carUsageRecords: CarUsageRecords = [
    {
        id:1,
        startedAt: new Date("Fri Mar 20 2020 13:50:00 GMT-0300 (Horário Padrão de Brasília)"),
        endedAt: new Date("Wed Mar 25 2020 16:55:00 GMT-0300 (Horário Padrão de Brasília)"),
        driverId:2,
        carId:1
    },
    {
        id:2,
        startedAt: new Date("Wed Apr 01 2020 10:34:00 GMT-0300 (Horário Padrão de Brasília)"),
        endedAt: new Date("Sat Apr 11 2020 17:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        driverId:4,
        carId:3
    },
    {
        id:3,
        startedAt:new Date("Wed Apr 15 2020 10:34:00 GMT-0300 (Horário Padrão de Brasília)") ,
        endedAt: new Date ("Mon Apr 20 2020 12:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        driverId:3,
        carId:4
    },
    {
        id:4,
        startedAt: new Date("Wed May 20 2020 15:05:00 GMT-0300 (Horário Padrão de Brasília)") ,
        endedAt: new Date("Wed May 27 2020 16:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        driverId:3,
        carId:6
    },
    {
        id:5,
        startedAt: new Date("Sat Jun 06 2020 17:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        endedAt: new Date("Fri Jun 12 2020 14:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        driverId:1,
        carId:4
    },
    {
        id:6,
        startedAt: new Date("Fri Jul 03 2020 08:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        endedAt: new Date("Wed Jul 15 2020 18:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        driverId:2,
        carId:3
    },
    {
        id:7,
        startedAt: new Date("Thu Jul 30 2020 12:00:00 GMT-0300 (Horário Padrão de Brasília)") ,
        endedAt: new Date("Tue Aug 04 2020 14:45:00 GMT-0300 (Horário Padrão de Brasília)") ,
        driverId:4,
        carId:1
    },

]