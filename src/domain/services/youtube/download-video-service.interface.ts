import { Readable } from "stream";

export interface DownloadVideoServiceInterface {
	downloadVideo(url: string): Readable;
}
