import { Car, Cars } from '../items/cars.interface';
import { cars } from '../items/mockup-storage';

interface NewCar {
    id?: number;
    manufacturer: string;
    licensePlate: string;
    color: string;
}

export const getAllCars = async (): Promise<Cars> => {
    try {
        return cars;
    } catch (error) {
        throw new Error(error.message)
    }


}

export const addNewCar = async (payload: NewCar): Promise<Car | string> => {
    try {
        let {
            manufacturer,
            color,
            licensePlate
        }: NewCar = payload;
        /* 
        Checking if the license plate sent in the request already exists in the database, since license plates are
        an unique identifier for cars, at least here in Brazil.        
        */
        let possibleDuplicate = cars.find((car: Car) => car.licensePlate === licensePlate);
        if (!possibleDuplicate) {
            cars.push({
                id: cars.length + 1,
                manufacturer: manufacturer,
                color: color,
                licensePlate: licensePlate,
                taken: false,
                currentDriverId: null
            })
            return cars[cars.length - 1];
        } else {
            return "Um carro com esta placa já está cadastrado.";
        }
    } catch (error) {
        throw new Error(error);
    }
}

export const getCarById = async (id: number): Promise<Car | string> => {
    try {
        let searchedCar = cars.find((car: Car) => car.id === id);
        if (searchedCar) {
            return searchedCar
        } else {
            return 'Nenhum carro encontrado'
        }

    } catch (error) {
        throw new Error(error);
    }
}

/**
 * 
 * @param payload {Car} contains the ID of the car to be updated, along with the vehicle's updated data.
 * 
 */


export const updateCar = async (payload: Car): Promise<string> => {
    try {
        let {
            id //of the car to be updated
            //The data below is the car's updated data.
            , manufacturer
            , licensePlate
            , color } = payload;
        let carIndex: number = cars.findIndex((car: Car) => car.id === id);

        if (carIndex) {
            cars[carIndex] = {
                ...cars[carIndex],
                manufacturer: manufacturer,
                licensePlate: licensePlate,
                color: color
            }
            return "Carro Atualizado!"
        }
        else {
            return "Carro não encontrado."
        }

    } catch (error) {
        throw new Error(error);
    }


}



export const getCarsByFilter = async (payload: NewCar): Promise<Cars | undefined> => {
    try {
        let {
            color,
            manufacturer
        } = payload;
        let foundCars: Cars = cars.filter((car: Car) => car.color === color || car.manufacturer === manufacturer);
        return foundCars;
    } catch (error) {
        throw new Error(error);
    }
}



