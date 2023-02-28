import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { InfoVideo } from './infoVideo.schema';
import { InfoOwner } from './infoOwner.schema';

export type VideoDocument = Video & Document;

@Schema()
export class Video {
  @Prop()
  _idVideo: string;

  @Prop()
  infoVideo: InfoVideo;

  @Prop()
  InfoOwner: InfoOwner;
}

export const VideoSchema = SchemaFactory.createForClass(Video);
