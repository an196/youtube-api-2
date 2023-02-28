import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Short, ShortSchema  } from './schemas/short.schema';
import { ShortController } from './short.controller'; 
import { ShortRepository } from './short.repository';
import { ShortService } from './short.service'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Short.name, schema: ShortSchema }]),
  ],
  controllers: [ShortController],
  providers: [ShortService, ShortRepository],
})
export class ShortModule {}
