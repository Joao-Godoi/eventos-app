import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventRepository } from './event.repository';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventRepository],
})
export class EventsModule {}
