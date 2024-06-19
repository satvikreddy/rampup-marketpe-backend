import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TripService } from './trip.service';
import { Prisma } from '@prisma/client';

@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.tripService.findById(id);
  }

  @Post('add')
  async add(@Body() data: Prisma.TripCreateInput) {
    return this.tripService.add(data);
  }
}
