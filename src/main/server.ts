require("dotenv").config();
import "reflect-metadata";
import "../common/containers";
import express from "express";
import { app } from "../infra/express/app";

export class Server {
	static async bootstrap() {
		const PORT = process.env.PORT || 8080;
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
	}
}

Server.bootstrap();
