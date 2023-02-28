import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, FilterQuery, Model } from 'mongoose';
import { CreateShortDto } from './dto/createShort.dto';

import { Short, ShortDocument } from './schemas/short.schema'

@Injectable()
export class ShortRepository {
    constructor(
        @InjectModel(Short.name) private shortModel: Model<ShortDocument>,
    ) { }

    async find(videoFilterQuery: FilterQuery<Short>): Promise<Short[]> {
        return this.shortModel.find(videoFilterQuery);
    }

    async createShort(createShortDto: CreateShortDto, session: ClientSession) {
        let short = new this.shortModel({
            ...createShortDto
        });
        try {
            short = await short.save({ session });
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        return short;
    }

    async getShortById(id: string) {
        let short;
        try {
            short = await this.shortModel.find({_idShort: id}).exec();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        if (!short) {
            throw new NotFoundException('The short with this id does not exist');
        }

        return short;
    }
}
