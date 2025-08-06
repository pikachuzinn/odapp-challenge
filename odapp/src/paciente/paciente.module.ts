import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { Paciente, PacienteSchema } from './schemas/paciente.schema';

@Module({ // Decorador que define a classe como um módulo NestJS.
  imports: [
    MongooseModule.forFeature([{ name: Paciente.name, schema: PacienteSchema }]),
  ], // MongooseModule.forFeature: Registra o modelo Paciente com seu PacienteSchema para ser usado dentro deste módulo. Isso permite que o PacienteService injete o modelo Paciente para interagir com a coleção correspondente no MongoDB

  controllers: [PacienteController], // Declara o PacienteController como parte deste módulo.

  providers: [PacienteService], // Declara o PacienteService como um provedor injetável dentro deste módulo.
})
export class PacienteModule {}
