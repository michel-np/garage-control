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
                manufacturer: manufacturer.toUpperCase(),
                color: color.toUpperCase(),
                licensePlate: licensePlate.toUpperCase(),
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
            id
            , manufacturer
            , licensePlate
            , color
        } = payload;
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



export const getCarsByFilter = async (query: any): Promise<Array<object>> => {
    try {
        console.log(query)
        let results: Array<object> = []
        if (!query.color && !query.manufacturer) return cars;
        cars.forEach((car: Car) => {
            if (query.color && !query.manufacturer) {
                if (car.color.includes(query.color.toUpperCase())) {
                    results.push(car)
                }
            }
            if (!query.color && query.manufacturer) {
                if (car.manufacturer.includes(query.manufacturer.toUpperCase())) {
                    results.push(car)
                }
            }
            if (query.color && query.manufacturer) {
                if (car.manufacturer.includes(query.manufacturer.toUpperCase()) && car.color.includes(query.color.toUpperCase())) {
                    results.push(car)
                }
            }
        })
        return results;
    } catch (error) {
        throw new Error(error);
    }
}



export const deleteCar = async (id: number): Promise<string> => {
    try {
        let carIndex: number | undefined = cars.findIndex((car: Car) => car.id === id);
        if (carIndex !== -1) {
            cars.splice(carIndex, 1);
            return "Veículo excluído"
        }
        return "Veículo não encontrado."
    } catch (error) {
        throw new Error(error)
    }

}