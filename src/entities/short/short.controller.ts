import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    Post,
    Req,
    Res,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Response } from 'express';
import { Connection } from 'mongoose';
import { CreateShortDto } from './dto/createShort.dto';

import { Short } from './schemas/short.schema';
import { ShortService } from './short.service';

@Controller('short')
export class ShortController {
    constructor(@InjectConnection() private readonly mongoConnection: Connection, private readonly shortService: ShortService,) { }

    @Post()
    async createShort(@Body() createShortDto: CreateShortDto,@Req() req, @Res() res: Response) {
        const session = await this.mongoConnection.startSession();
        session.startTransaction(req.body);
        console.log()
        try {
            const newShort: any = await this.shortService.createShort(createShortDto, session);
            await session.commitTransaction();
            return res.status(HttpStatus.OK).send(newShort);
        } catch (error) {
            await session.abortTransaction();
            throw new BadRequestException(error);
        } finally {
            session.endSession();
        }
    }

    

    @Get()
    async getShorts(@Res() res: Response): Promise<Short[]> {
        const shorts = await this.shortService.getShorts();
        res.status(HttpStatus.OK).send(shorts);
        return;
    }

    @Get('/:id')
    async getShortById(@Param('id') id: string, @Res() res: Response): Promise<Short[]> {
        const short = await this.shortService.getShortById(id);
        res.status(HttpStatus.OK).send(short);
        return;
    }
}
