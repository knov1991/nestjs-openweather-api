import { Module } from '@nestjs/common';
import { TempoService } from './tempo.service';
import { TempoController } from './tempo.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
    }),
  ],
  controllers: [TempoController],
  providers: [TempoService],
})
export class TempoModule {}
