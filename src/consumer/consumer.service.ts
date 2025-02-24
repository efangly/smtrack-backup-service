import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LogDays, TempLogs } from '@prisma/client';

@Injectable()
export class ConsumerService {
  constructor(private readonly prisma: PrismaService) {}

  async logDayBackup(data: LogDays) {
    await this.prisma.logDays.create({ data });
  }

  async tempLogBackup(data: TempLogs) {
    await this.prisma.tempLogs.create({ data });
  }
}
