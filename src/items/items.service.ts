import {Car, Cars} from './cars.interface';
import {Driver, Drivers} from './drivers.interface';
import {CarUsageRecord} from './carUsage.interface'


const cars : Cars = [
    {   
        id: 1,
        manufacturer:'Volkswagen',
        color:'Azul',
        licensePlate:'DDD-AAAA',
        taken:false
    },
    {   
        id: 2,
        manufacturer:'Volkswagen',
        color:'Azul',
        licensePlate:'DDD-AAAA',
        taken:false
    },
    {   
        id: 3,
        manufacturer:'Volkswagen',
        color:'Azul',
        licensePlate:'DDD-AAAA',
        taken:true,
        currentDriverId: 3
    },
    {   
        id: 4,
        manufacturer:'Volkswagen',
        color:'Azul',
        licensePlate:'DDD-AAAA',
        taken:false
    },
    {   
        id: 5,
        manufacturer:'Volkswagen',
        color:'Azul',
        licensePlate:'DDD-AAAA',
        taken:false
    },
    {   
        id: 6,
        manufacturer:'Volkswagen',
        color:'Azul',
        licensePlate:'DDD-AAAA',
        taken:false
    },
]