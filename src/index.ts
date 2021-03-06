import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { carRoutes } from './routes/carRoutes';
import { driverRoutes } from './routes/driverRoutes';
import { usageRecordRoutes } from './routes/usageRecordRoutes'




dotenv.config();



const PORT: number = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 7000;

const app = express();


app.use(helmet());

app.use(cors());

app.use(express.json());

app.use("/cars", carRoutes);

app.use("/drivers", driverRoutes);

app.use("/usage-records", usageRecordRoutes);


const server = app.listen(PORT || 7000, () => console.log(`Listening on port ${PORT}`));

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
