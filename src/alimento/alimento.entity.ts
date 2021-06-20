/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ALIMENTO')
export class Alimento {
  @PrimaryGeneratedColumn({name: "ALIM_CD_ID"})
  id: number;

  @Column({ name: 'ALIM_TX_NOME' })
  nome: string;
}
