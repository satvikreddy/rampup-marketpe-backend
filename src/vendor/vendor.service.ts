import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VendorService {
  constructor(private readonly db: DatabaseService) {}

  getVendor(vendorId: string) {
    return this.db.prisma.vendor.findUnique({
      where: {
        id: vendorId,
      },
    });
  }

  getVendorName(vendorId: string) {
    return this.db.prisma.vendor.findUnique({
      where: {
        id: vendorId,
      },
      select: {
        name: true,
      },
    });
  }

  getVendorTrips(vendorId: string) {
    return this.db.prisma.vendor.findUnique({
      where: {
        id: vendorId,
      },
      include: {
        Trip: true,
      },
    });
  }

  getVendorTrips2(vendorId: string) {
    return this.db.prisma.vendor.findUnique({
      where: {
        id: vendorId,
      },
      select: {
        id: true,
        name: true,
        Trip: true,
      },
    });
  }
}
