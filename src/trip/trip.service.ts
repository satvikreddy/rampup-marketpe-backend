import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TripService {
  constructor(private readonly db: DatabaseService) {}

  findById(id: string) {
    return this.db.prisma.trip.findUnique({
      where: {
        id,
      },
    });
  }

  add(data: Prisma.TripCreateInput) {
    return this.db.prisma.trip.create({
      data,
    });
  }
}
