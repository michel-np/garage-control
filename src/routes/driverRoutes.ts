import express, { Request, Response, NextFunction } from "express";
import { Driver, Drivers } from '../items/drivers.interface';
import { getAllDrivers, addNewDriver, updateDriver, deleteDriver } from '../controllers/driverController';

export const driverRoutes = express.Router();

//If the request gets a "name" key in the request body, they get the Drivers filtered by given name.
driverRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let drivers: Drivers | Array<any> = await getAllDrivers(req.body.name);
        res.status(200).send(drivers);
    } catch (error) {
        next(error);
    }
})

driverRoutes.post("/add-driver", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await addNewDriver(req.body.name);
        res.status(200).send(result)
    } catch (error) {
        next(error);
    }

})


driverRoutes.post("/update-driver", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await updateDriver({ id: parseInt(req.body.id), name: req.body.name })
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
})

driverRoutes.post("/delete-driver/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await deleteDriver(parseInt(req.params.id));
        res.status(200).send(result)
    } catch (error) {
        next(error)
    }
})