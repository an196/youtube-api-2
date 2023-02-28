import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type InfoOwnerDocument = InfoOwner & Document;

@Schema()
export class InfoOwner {
    @Prop()
    channelName: string;

    @Prop()
    imgProfile: string;

    @Prop()
    channelLink: string;
}

export const InfoOwnerSchema = SchemaFactory.createForClass(InfoOwner);