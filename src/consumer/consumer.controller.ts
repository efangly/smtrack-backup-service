import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Ctx, Payload, RmqContext } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';
import { LogDays, Notifications, } from '@prisma/client';;

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}
  private readonly logger = new Logger(ConsumerService.name);

  @EventPattern('logday-backup')
  async backup(@Payload() data: LogDays, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    try {
      await this.consumerService.logDayBackup(data);
      channel.ack(message);
    } catch (error) {
      this.logger.error(error);
      // channel.nack(message, false, false);
    }
  }

  @EventPattern('notification-backup')
  async backupnotification(@Payload() data: Notifications, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    try {
      await this.consumerService.notificationBackup(data);
      channel.ack(message);
    } catch (error) {
      this.logger.error(error);
      // channel.nack(message, false, false);
    }
  }
}