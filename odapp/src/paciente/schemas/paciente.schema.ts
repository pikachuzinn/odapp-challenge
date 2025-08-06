import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; 
import { Document } from 'mongoose';

// Este arquivo define o schema Mongoose para a entidade Paciente, que mapeia a estrutura dos documentos na coleção pacientes do MongoDB.

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
