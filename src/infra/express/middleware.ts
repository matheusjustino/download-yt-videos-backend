import { Express, json } from "express";
import cors from "cors";

export const setupMiddleware = (app: Express): void => {
	app.use(cors());
	app.use(json());
};
