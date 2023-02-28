import { Injectable } from '@nestjs/common';
import { ClientSession } from 'mongoose';
import { CreateShortDto } from './dto/createShort.dto';

import { Short } from './schemas/short.schema';
import { ShortRepository } from './short.repository';

@Injectable()
export class ShortService {
    constructor(private readonly shortRepository: ShortRepository) { }

    async getShorts(): Promise<Short[]> {
        return this.shortRepository.find({});
    }

    async createShort(createShortDto: CreateShortDto, session: ClientSession) {
        return await this.shortRepository.createShort(createShortDto, session);
    }

    async getShortById(shortId:string) {
        return await this.shortRepository.getShortById(shortId);
    }
}
