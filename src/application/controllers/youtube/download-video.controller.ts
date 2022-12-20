import { Request, Response } from "express";
import { container, injectable } from "tsyringe";

// INTERFACES
import { Controller } from "../controller";
import { DownloadVideoServiceInterface } from "../../../domain/services/youtube/download-video-service.interface";

// ENUMS
import { ContainersEnum } from "../../../common/containers/containers.enum";

@injectable()
class DownloadVideoController implements Controller {
	public handle(req: Request, res: Response) {
		try {
			const downloadVideoService: DownloadVideoServiceInterface =
				container.resolve(ContainersEnum.DOWNLOAD_VIDEO_SERVICE);

			const url = req.query.url as string;
			res.header("Content-Disposition", "attachment; filename=video.mp4");

			const stream = downloadVideoService.downloadVideo(url);

			return stream
				.on("error", (error) => {
					console.error("Stream Error:", error);

					return res
						.status(400)
						.json({ message: "Ops, algo deu errado" });
				})
				.pipe(res);
		} catch (error: any) {
			console.error(error);
			return res.status(400).json({ message: "Ops, algo deu errado" });
		}
	}
}

export const downloadVideoController = container.resolve(
	DownloadVideoController
);
