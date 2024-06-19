import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyModule } from './dummy/dummy.module';
import { TripModule } from './trip/trip.module';
import { DatabaseModule } from './database/database.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [DummyModule, TripModule, DatabaseModule, VendorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
