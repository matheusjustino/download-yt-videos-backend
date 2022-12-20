import { Router } from "express";

// ADAPTERS
import { expressRouteAdapter } from "../adapters";

// CONTROLLERS
import { downloadVideoController } from "../../../application/controllers/youtube/download-video.controller";

export default (router: Router): void => {
	router.use(
		`/youtube`,
		router.get(`/download`, expressRouteAdapter(downloadVideoController))
	);
};
