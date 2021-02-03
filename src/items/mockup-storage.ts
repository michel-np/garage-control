import {Cars} from './cars.interface';
import {Drivers} from './drivers.interface';
import {CarUsageRecord} from './carUsage.interface'


export const cars : Cars = [
    {   
        id: 1,
        manufacturer:'VOLKSWAGEN',
        color:'Azul',
        licensePlate:'AAA-0000',
        taken:false,
        currentDriverId:null
    },
    {   
        id: 2,
        manufacturer:'FIAT',
        color:'Azul',
        licensePlate:'BBB-1111',
        taken:false,
        currentDriverId:null
    },
    {   
        id: 3,
        manufacturer:'FORD',
        color:'Azul',
        licensePlate:'CCC-2222',
        taken:true,
        currentDriverId: 3
    },
    {   
        id: 4,
        manufacturer:'CHEVROLET',
        color:'Azul',
        licensePlate:'DDD-3333',
        taken:false,
        currentDriverId:2
    },
    {   
        id: 5,
        manufacturer:'PEUGEOT',
        color:'Azul',
        licensePlate:'EEE-4444',
        taken:false,
        currentDriverId:null
    },
    {   
        id: 6,
        manufacturer:'HYUNDAI',
        color:'Azul',
        licensePlate:'FFF-5555',
        taken:false,
        currentDriverId:null
    },
];

export const drivers: Drivers = [
    {
        id:1,
        name:'Sergio Augusto',
        usingCar:false,
        currentCarId:null
    },
    {
        id:2,
        name:'Paulo Ricardo',
        usingCar:true,
        currentCarId:4
    },
    {
        id:3,
        name:'José Carlos',
        usingCar:true,
        currentCarId:3
    },
    {
        id:4,
        name:'Sergio Augusto',
        usingCar:false,
        currentCarId:null
    }
];