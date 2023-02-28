import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Video, VideoSchema } from "./schemas/video.schema";
import { VideoController } from "./video.controller";
import { VideoRepository } from "./video.repository";
import { VideoService } from "./video.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])],
    controllers: [VideoController],
    providers: [VideoService, VideoRepository]
})
export class VideoModule {}