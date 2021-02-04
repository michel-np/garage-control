import express, {Request, Response} from "express";
import {Driver, Drivers} from '../items/drivers.interface';
import {getAllDrivers} from '../controllers/driverController';

export const driverRoutes = express.Router();


driverRoutes.get("/", async (req : Request, res : Response) => {
    try {
        let drivers:Drivers = await getAllDrivers();
        res.status(200).send(drivers);
    } catch (error) {
        res.status(404).send(error);
    }
})