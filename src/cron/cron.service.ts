import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CronService implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(CronService.name);

  async onModuleInit() {
    await this.backupTempLog();
  }

  @Cron('0 0 * * *')
  async backup() {
    await this.backupTempLog();
  }

  async backupTempLog() {
    try {
      const templog = await axios.get(`${String(process.env.TEMPLOG_URL)}/backup`);
      if (templog.data.data.length > 0) {
        await this.prisma.tempLogs.createMany({ data: templog.data.data });
        const result = await axios.delete(String(`${String(process.env.TEMPLOG_URL)}/backup/1`));
        this.logger.log(`Templog backup success with ${result.data.data.count} data`);
      }
    } catch (error) {
      this.logger.error(`Templog backup failed with error: ${error.message}`); 
    }
  }
}