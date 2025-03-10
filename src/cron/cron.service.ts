import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { format } from 'date-fns';
import { BackupService } from 'src/backup/backup.service';

@Injectable()
export class CronService {
  constructor(private readonly backup: BackupService) {}
   private readonly logger = new Logger(CronService.name);
  @Cron('0 0 * * *')
  async backupTemplog() {
    try {
      // await this.backup.backupTempLog();
      this.logger.log(`delete log success at ${format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'")}`);
    } catch (error) {
      this.logger.error(`delete log failed at ${format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'")} with error: ${error.message}`);
    }
  }
}