import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConsumerModule } from './consumer/consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(ConsumerModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ || 'amqp://admin:thanesmail1234@siamatic.co.th:5672'],
      queue: 'send-backup',
      queueOptions: { durable: true },
      noAck: false,
      prefetchCount: 1
    },
  });
  await app.listen(process.env.PORT || 3000);
  await microservice.listen();
}
bootstrap();
