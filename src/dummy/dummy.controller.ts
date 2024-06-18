import { Controller, Get } from '@nestjs/common';

@Controller('dummy')
export class DummyController {
  @Get()
  getDummy() {
    return {
      success: true,
    };
  }
}
