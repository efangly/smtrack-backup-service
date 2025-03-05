import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LogDays, Notifications } from '@prisma/client';

@Injectable()
export class ConsumerService {
  constructor(private readonly prisma: PrismaService) {}

  async logDayBackup(data: LogDays) {
    await this.prisma.logDays.create({ data });
  }

  async notificationBackup(data: Notifications) {
    await this.prisma.notifications.create({ data });
  }
}
