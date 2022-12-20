import { container } from "tsyringe";

// ENUMS
import { ContainersEnum } from "./containers.enum";

// INTERFACES
import { DownloadVideoServiceInterface } from "../../domain/services/youtube/download-video-service.interface";

// SERVICES
import { DownloadVideoService } from "../../application/services/download-video.service";

// SERVICES
container.registerSingleton<DownloadVideoServiceInterface>(
	ContainersEnum.DOWNLOAD_VIDEO_SERVICE,
	DownloadVideoService
);
