import { Readable } from "stream";
import yldl from "ytdl-core";

// INTERFACES
import { DownloadVideoServiceInterface } from "../../domain/services/youtube/download-video-service.interface";

export class DownloadVideoService implements DownloadVideoServiceInterface {
	public downloadVideo(url: string): Readable {
		console.log(`DownloadVideoService - Data: ${url}`);
		return yldl(url);
	}
}
