import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InfoShortDocument = InfoShort & Document;

@Schema()
export class InfoShort {
  @Prop()
  title: string;

  @Prop()
  thumbnail: string;

  @Prop()
  embedlink: string;

  @Prop()
  briefDes: string;

  @Prop()
  timePost: string;

  @Prop()
  viewCount: string;

  @Prop()
  time: string;

  @Prop()
  gif: string;

  @Prop()
  video: string;
}

export const InfoShortSchema = SchemaFactory.createForClass(InfoShort);
