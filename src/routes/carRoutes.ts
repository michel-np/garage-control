import express, {Request, Response} from "express";
import {Car, Cars} from "../items/cars.interface";
import {getAllCars, getCarById, updateCar, addNewCar} from '../controllers/carController';

export const carRoutes = express.Router();


carRoutes.get("/", async (req: Request, res: Response) => {
    try {
        let cars : Cars = await getAllCars();
        res.status(200).send(cars);
        
    } catch (error) {
        res.status(404).send(error)
    }    
    
})


carRoutes.get("/get-car/:id", async (req:Request, res:Response)=> {
    try {
        let car:Car | string = await getCarById(parseInt(req.params.id));
        res.status(200).send(car);
    } catch (error) {
        res.status(404).send(error)
    }

})


carRoutes.post("/update-car", async(req:Request, res:Response) => {
    try {
        await updateCar(req.body);
        res.status(200).send('Car Updated!')
    } catch (error) {
        res.status(404).send(error);
    }
})

carRoutes.post("/add-car", async (req:Request, res:Response) => {
    try {
        let response = await addNewCar(req.body)
        res.status(200).send(response)
    } catch (error) {
        
    }
})

    

