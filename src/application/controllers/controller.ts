import { Request, Response } from "express";

// HELPERS
import { HttpResponse } from "./../helpers/http";

export interface Controller<T = any> {
	handle: (req: Request, res: Response) => any;
}
