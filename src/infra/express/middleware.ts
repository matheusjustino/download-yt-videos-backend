import { Express, json } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

export const setupMiddleware = (app: Express): void => {
	app.use(cors());
	app.use(json());
	app.use(helmet());
	app.use(compression());
};
