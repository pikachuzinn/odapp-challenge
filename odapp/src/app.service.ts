import { Injectable } from '@nestjs/common';

// Descrição: Este é um serviço básico da aplicação NestJS. Ele contém a lógica de negócios para o controlador AppController.

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
