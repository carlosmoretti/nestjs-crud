import { Alimento } from './alimento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { AlimentoController } from './alimento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Alimento])],
  providers: [AlimentoService],
  controllers: [AlimentoController],
})
export class AlimentoModule {}
