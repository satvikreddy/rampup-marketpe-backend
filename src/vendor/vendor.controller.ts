import { Controller, Get, Param } from '@nestjs/common';
import { VendorService } from './vendor.service';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get(':id')
  getVendor(@Param('id') vendorId: string) {
    return this.vendorService.getVendor(vendorId);
  }

  @Get(':id/name')
  getVendorName(@Param('id') vendorId: string) {
    return this.vendorService.getVendorName(vendorId);
  }

  @Get(':id/trips')
  getVendorTrips(@Param('id') vendorId: string) {
    return this.vendorService.getVendorTrips(vendorId);
  }

  @Get(':id/trips2')
  getVendorTrips2(@Param('id') vendorId: string) {
    return this.vendorService.getVendorTrips2(vendorId);
  }
}
