import express, { Request, Response } from "express";
import { Car, Cars } from "../items/cars.interface";
import { deleteCar, getCarById, updateCar, addNewCar, getCarsByFilter } from '../controllers/carController';

export const carRoutes = express.Router();




carRoutes.post("/add-car", async (req: Request, res: Response) => {
    try {
        let response = await addNewCar(req.body)
        res.status(200).send(response)
    } catch (error) {

    }
})

carRoutes.post("/update-car", async (req: Request, res: Response) => {
    try {
        await updateCar(req.body);
        res.status(200).send('Car Updated!')
    } catch (error) {
        res.status(404).send(error);
    }
})

carRoutes.get("/get-car/:id", async (req: Request, res: Response) => {
    try {
        let car: Car | string = await getCarById(parseInt(req.params.id));
        res.status(200).send(car);
    } catch (error) {
        res.status(404).send(error)
    }

})

/*The route below requires a query string containing either one or both of the following parameters: color and manufacturer. 
if only one of them gets sent to the route, only that one parameter will be used on the search. Send both of them
in order to narrow down the results. For more info, please refer o the getCarsByFilter.
*/

carRoutes.get("/", async (req: Request, res: Response) => {
    try {

        let cars: Array<object> | undefined = await getCarsByFilter(req.query);
        res.status(200).send(cars);

    } catch (error) {
        res.status(404).send(error)
    }

})


carRoutes.post("/delete-car/:id", async (req: Request, res: Response) => {
    try {
        let result = await deleteCar(parseInt(req.params.id));
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error)
    }
})





