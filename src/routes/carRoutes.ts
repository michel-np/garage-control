import express, { Request, Response, NextFunction } from "express";
import { Car, Cars } from "../items/cars.interface";
import { deleteCar, getCarById, updateCar, addNewCar, getCarsByFilter } from '../controllers/carController';

export const carRoutes = express.Router();




carRoutes.post("/add-car", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let response = await addNewCar(req.body)
        res.status(200).send(Response, next : NextFunction)
    } catch (error) {
        next(error);
    }
})

carRoutes.post("/update-car", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await updateCar(req.body);
        res.status(200).send('Car Updated!')
    } catch (error) {
        next(error);
    }
})

carRoutes.get("/get-car/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let car: Car | string = await getCarById(parseInt(req.params.id));
        res.status(200).send(car);
    } catch (error) {
        next(error)
    }

})

/*The route below requires a query string containing either one or both of the following parameters: color and manufacturer. 
if only one of them gets sent to the route, only that one parameter will be used on the search. Send both of them
in order to narrow down the results. For more info, please refer o the getCarsByFilter.
*/

carRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {

        let cars: Array<object> | undefined = await getCarsByFilter(req.query);
        res.status(200).send(cars);

    } catch (error) {
        next(error);
    }

})


carRoutes.post("/delete-car/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await deleteCar(parseInt(req.params.id));
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
})





