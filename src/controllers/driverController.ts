import {Driver, Drivers} from '../items/drivers.interface';
import {drivers} from '../items/mockup-storage';




export const getAllDrivers = async () : Promise<Drivers> => {

    try {
        return drivers;
    } catch (error) {
        throw new Error(error);
    }

}


export const addNewDriver = async (name:string) : Promise <Driver | string> => {
    try {
        let possibleDuplicate = drivers.find((driver:Driver) => driver.name === name);
    if(!possibleDuplicate){
        drivers.push({
            id:drivers.length+1,
            name:name,
            usingCar:false,
            currentCarId:null
        })
        return "Carro adicionado!"
    }
    else{
        return "Motorista já cadastrado."
    }
    } catch (error) {
        throw new Error(error);
    }
}

export const updateDriver = async(driver:Driver) : Promise<void> => {
    try {
        let {id, name} = driver;
        let driverIndex : number = drivers.findIndex((driver : Driver) => driver.id === id);
        if(driverIndex){
            drivers[driverIndex] = {
                ...drivers[driverIndex],
                name:name,                
            }
        }
        
    } catch (error) {
        throw new Error(error);
    }
}