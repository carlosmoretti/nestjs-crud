/* eslint-disable prettier/prettier */
import { Alimento } from './alimento.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SharedService } from 'src/shared/service.shared';
import { Repository } from 'typeorm';

@Injectable()
export class AlimentoService extends SharedService<Alimento> {
  constructor(
    @InjectRepository(Alimento)
    private alimentoRepository: Repository<Alimento>) {
        super(alimentoRepository);
    }
}
