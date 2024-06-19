import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyModule } from './dummy/dummy.module';
import { TripModule } from './trip/trip.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DummyModule, TripModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
