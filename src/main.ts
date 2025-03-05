import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ || 'amqp://admin:thanesmail1234@siamatic.co.th:5672'],
      queue: 'backup_queue',
      queueOptions: { durable: true },
      noAck: false,
      prefetchCount: 1
    },
  });
  await microservice.listen();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
