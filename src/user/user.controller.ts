import { Body, Controller, Get, Post } from '@nestjs/common';
import { resultAuth, resultDto } from 'src/dto/result.dto';
import { UserCreateDto, UserAuth } from './dto/user.create.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('listar')
  async findAll(): Promise<User[]>{
    return this.userService.findAll();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: UserCreateDto): Promise<resultDto>{
    return this.userService.cadastrar(data);
  }
  @Post('auth')
  async auth(@Body() data:UserAuth):Promise<resultDto|resultAuth>{
    return this.userService.auth(data);
  }
}
