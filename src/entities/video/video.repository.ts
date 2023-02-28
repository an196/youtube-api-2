import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Video, VideoDocument } from './schemas/video.schema';

@Injectable()
export class VideoRepository {
  constructor(
    @InjectModel(Video.name) private VideoModel: Model<VideoDocument>,
  ) {}

  async find(videoFilterQuery: FilterQuery<Video>): Promise<Video[]> {
    return this.VideoModel.find(videoFilterQuery);
  }
}
