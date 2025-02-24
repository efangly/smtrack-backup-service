import { Global, Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Global()
@Module({
  controllers: [ConsumerController],
  providers: [ConsumerService, PrismaService],
  exports: [ConsumerService]
})
export class ConsumerModule {}
