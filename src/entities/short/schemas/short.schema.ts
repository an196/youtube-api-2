import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { InfoShort } from './infoShort.schema';
import { InfoOwner } from './infoOwner.schema';

export type ShortDocument = Short & Document;

@Schema()
export class Short {
  @Prop()
  _idShort: string;

  @Prop()
  infoShort: InfoShort;

  @Prop()
  infoOwner: InfoOwner;
}

export const ShortSchema = SchemaFactory.createForClass(Short);
