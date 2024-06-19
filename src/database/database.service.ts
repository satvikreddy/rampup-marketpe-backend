import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { env } from 'process';

@Injectable()
export class DatabaseService {
  private _prisma: PrismaClient;

  constructor() {
    const datasourceUrl = env.DATABASE_URL!;
    const prismaClient = new PrismaClient({ datasourceUrl });
    this._prisma = prismaClient;
  }

  get prisma() {
    return this._prisma;
  }
}
