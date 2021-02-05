import { Driver, Drivers } from '../items/drivers.interface';
import { drivers } from '../items/mockup-storage';


/**
 * 
 * @param name Optional parameter for filtering by name
 */

export const getAllDrivers = async (name: string): Promise<Drivers> => {

    try {
        if (name) {
            name = name.toUpperCase();
            return drivers.filter((driver: Driver) => driver.name.includes(name));
        }
        return drivers;
    } catch (error) {
        throw new Error(error);
    }

}

/**
 * 
 * @param name the only Driver parameter that can be provided by the user.
 */

export const addNewDriver = async (name: string): Promise<Driver | string> => {
    try {
        name = name.toUpperCase()
        let possibleDuplicate = drivers.find((driver: Driver) => driver.name === name);
        //Checking if driver already exists.
        if (!possibleDuplicate) {
            drivers.push({
                id: drivers.length + 1,
                name: name,
                usingCar: false,
                currentCarId: null
            })
            return "Motorista adicionado!"
        }
        else {
            return "Motorista já cadastrado."
        }
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * 
 * @param driver this method gets the Driver to be updated id's, along with their new name.
 * 
 */

export const updateDriver = async (driver: Driver): Promise<string> => {
    try {
        let { id, name } = driver;
        let driverIndex: number = drivers.findIndex((driver: Driver) => driver.id === id);
        if (driverIndex) {
            drivers[driverIndex] = {
                ...drivers[driverIndex],
                name: name,
            }
            return "Motorista atualizado!"
        } else {
            return "Motorista não encontrado utilizando identificador informado."
        }

    } catch (error) {
        throw new Error(error);
    }
}

/**
 * 
 * @param id self explanatory. Deleting driver By their ID. 
 */

export const deleteDriver = async (id: number): Promise<string> => {
    try {
        let driverIndex: number | undefined = drivers.findIndex((driver: Driver) => driver.id === id);
        if (driverIndex !== -1) {
            drivers.splice(driverIndex, 1);
            return "Motorista excluído"
        }
        return "Motorista não encontrado."
    } catch (error) {
        throw new Error(error)
    }
}