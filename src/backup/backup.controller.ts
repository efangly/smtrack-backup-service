import { Controller, Get } from '@nestjs/common';
import { BackupService } from './backup.service';

@Controller('backup')
export class BackupController {
  constructor(private readonly backup: BackupService) {}

  @Get()
  async backupLog() {
    await this.backup.backupTempLog();
    return "OK";
  }
}
