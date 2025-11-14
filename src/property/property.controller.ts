import { Controller, Get, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get('all')
  findAll() {
    return 'return all property here';
  }

  @Post()
  getAll() {
    return 'thi will make some property';
  }
}
