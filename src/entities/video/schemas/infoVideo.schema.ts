import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type InfoVideoDocument = InfoVideo & Document;

@Schema()
export class InfoVideo {
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
}

export const InfoVideoSchema = SchemaFactory.createForClass(InfoVideo);