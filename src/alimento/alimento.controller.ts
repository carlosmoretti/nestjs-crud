import { Alimento } from './alimento.entity';
import { AlimentoService } from './alimento.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('alimento')
export class AlimentoController {
  constructor(private service: AlimentoService) {}

  @Get()
  async showAll() {
    return this.service.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Post()
  async post(@Body() data: Alimento) {
    return this.service.add(data);
  }
}
