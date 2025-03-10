import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LogDays, Notifications, TempLogs } from '@prisma/client';
import { format, toDate } from "date-fns";

@Injectable()
export class ConsumerService {
  constructor(private readonly prisma: PrismaService) {}

  async logDayBackup(data: LogDays) {
    data.createAt = toDate(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'"));
    data.updateAt = toDate(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'"));
    await this.prisma.logDays.create({ data });
  }

  async notificationBackup(data: Notifications) {
    data.createAt = toDate(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'"));
    data.updateAt = toDate(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'"));
    await this.prisma.notifications.create({ data });
  }

  async templogBackup(data: TempLogs) {
    data.createdAt = toDate(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'"));
    data.updatedAt = toDate(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'"));
    await this.prisma.tempLogs.create({ data });
  }
}
