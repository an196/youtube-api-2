import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { Video } from './schemas/video.schema';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) { }

  @Get()
  async getVideos(@Res() res: Response): Promise<Video[]>{
    const videos = await this.videoService.getVideo();
    res.status(HttpStatus.OK).send(videos);
    return;
  }

}