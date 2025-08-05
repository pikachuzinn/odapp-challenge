import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir requisições do front-end
  app.enableCors();

  // Configuração do Swagger para docs da API
  const config = new DocumentBuilder()
    .setTitle('ODAAP API')
    .setDescription('API documentation for ODAAP')
    .setVersion('1.0')
    .addTag('odaap')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`App running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
