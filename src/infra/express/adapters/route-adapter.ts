import { RequestHandler } from "express";

import { Controller } from "../../../application/controllers/controller";

type Adapter = <T>(controller: Controller<T>) => RequestHandler;

export const expressRouteAdapter: Adapter =
	(controller) => async (req, res) => {
		try {
			console.log(
				`METHOD: ${req.method} - URL: ${
					req.originalUrl
				} - IP_REQUEST: ${
					req.headers["x-forwarded-for"] || req.socket.remoteAddress
				} - HOST: ${
					req.hostname
				} - DATE: ${new Date().toLocaleString()}`
			);
			const { body, query, params, headers } = req;

			const { statusCode, data } = await controller.handle(req, res);

			res.status(statusCode).json(data);
		} catch (error) {
			console.error(error as string);

			const defaultName = "ServerError";
			const defaultMessage = "Server Error";

			const { message = defaultMessage, name = defaultName } =
				error as any;

			res.status((error as any)?.statusCode ?? 500).json({
				name,
				message,
			});
		}
	};
