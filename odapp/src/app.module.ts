import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { MongooseModule } from '@nestjs/mongoose';

// Este é o módulo raiz da aplicação NestJS. Ele importa outros módulos necessários, como o PacienteModule (para gerenciar a lógica de pacientes) e o MongooseModule (para conexão com o MongoDB).
 
@Module({ // Decorador que define a classe como um módulo NestJS.
  imports: [PacienteModule, MongooseModule.forRoot('mongodb://localhost/nest')],

// PacienteModulo: Importa o módulo de pacientes, que contém os controladores, serviços e schemas relacionados a pacientes.

// MongooseModule.forRoot('mongodb://localhost/nest'): Configura a conexão com o banco de dados MongoDB. A string de conexão aponta para uma instância local do MongoDB com o banco de dados 'nest'.


  controllers: [AppController], // Declara os controladores que pertencem a este módulo.

  providers: [AppService], // Declara os serviços que serão injetados em outros componentes.
})
export class AppModule {}
