import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findUsers() {
    return 'all users in here';
  }

  // get dynamic data
  @Get(':id/:slug')
  findOne(@Param() id: object) {
    return id;
  }

  @Post()
  addUsers() {
    return 'add new user';
  }
}
