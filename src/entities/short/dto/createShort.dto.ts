import { IsNotEmpty, IsString, isObject } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { InfoShort } from '../schemas/infoShort.schema';
import { InfoOwner } from '../schemas/infoOwner.schema';

export class CreateShortDto {
    @IsNotEmpty()
    _idShort: string;
    infoShort: InfoShort;
    InfoOwner: InfoOwner;

}
