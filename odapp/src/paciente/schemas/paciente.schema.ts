import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { Document } from 'mongoose';

export type PacienteDocument = Paciente & Document;

@Schema()
export class Paciente {
  @Prop({ required: true})
  numero: string; // Adicionando o campo número de telefone

  @Prop({ required: true })
  nome: string; // Adicionando o campo nome

  @Prop({ required: true })
  idade: number; // Adicionando o campo idade

  @Prop({ required: true })
  dataCadastro: Date; // Adicionando o campo dataCadastro

  @Prop({ required: true })
  cidade: string; // Adicionando o campo cidade

  @Prop({ required: true })
  estado: string; // Adicionando o campo estado
}

export const PacienteSchema = SchemaFactory.createForClass(Paciente); 
