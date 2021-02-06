import express, { Request, Response, NextFunction } from "express";
import { getCarUsageRecords, addNewUsageRecord, updateUsageRecord } from '../controllers/usageRecordController';


export const usageRecordRoutes = express.Router();



usageRecordRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let records = await getCarUsageRecords();
        res.status(200).send(records);
    } catch (error) {
        next(error);
    }

})

usageRecordRoutes.post("/add-new-record", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await addNewUsageRecord(req.body);
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
})

usageRecordRoutes.post("/update-record/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result = await updateUsageRecord(parseInt(req.params.id), req.body);
        res.status(200).send(result)
    } catch (error) {
        next(error);
    }
})
