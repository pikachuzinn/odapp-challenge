import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Este é um controlador básico da aplicação NestJS. Ele define uma rota simples para testar se a API está funcionando.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
