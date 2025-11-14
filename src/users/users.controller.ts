import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findUsers() {
    return 'all users in here';
  }

  @Post()
  addUsers() {
    return 'add new user';
  }
}
