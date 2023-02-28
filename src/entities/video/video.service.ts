import { Injectable } from "@nestjs/common";

import { Video } from "./schemas/video.schema";
import { VideoRepository } from "./video.repository";

@Injectable()
export class VideoService {
    constructor(private readonly videoRepository: VideoRepository) {}

    async getVideo(): Promise<Video[]> {
        return this.videoRepository.find({});
    }
}