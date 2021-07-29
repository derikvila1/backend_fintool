import { Body, Controller, Get, Post, Delete, Param, Query } from '@nestjs/common';
import { resultDto } from 'src/dto/result.dto';
import { InputsCreateDto } from './dto/inputs.create.dto';
import { Inputs } from './inputs.entity';
import { InputsService } from './inputs.service';

@Controller('inputs')
export class InputsController {
  constructor(private readonly InputsService: InputsService) {}

  @Get('listar')
  async findAll(@Query('id') id:number): Promise<Inputs[]>{
    return this.InputsService.findAll(id);
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: InputsCreateDto): Promise<resultDto>{
    return this.InputsService.cadastrar(data)
  }

  @Delete('deletar')
  async deletar(@Body() id:number): Promise<any>{
    return this.InputsService.deletar(id);
  }
}
