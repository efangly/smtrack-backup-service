import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HealthModule } from './health/health.module';
import { CronModule } from './cron/cron.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    HealthModule,
    CronModule,
    PrismaModule,
    ConsumerModule,
    // ClientsModule.register([
    //   {
    //     name: 'RABBITMQ_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [process.env.RABBITMQ || 'amqp://admin:thanesmail1234@siamatic.co.th:5672'],
    //       queue: 'send-backup',
    //       queueOptions: { durable: true },
    //       noAck: false,
    //       prefetchCount: 1
    //     }
    //   },
    // ])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
