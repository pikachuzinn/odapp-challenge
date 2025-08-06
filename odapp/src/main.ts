import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Descrição: Este é o ponto de entrada da aplicação NestJS. Ele configura o módulo principal ('AppModule'), habilita o CORS para permitir requisições do frontend e configura a documentação da API usando Swagger.

async function bootstrap() { // Função assíncrona que inicializa a aplicação NestJS.

  const app = await NestFactory.create(AppModule); // Cria uma instância da aplicação NestJS usando o 'AppModule'  como módulo raiz.

  
  app.enableCors(); // Habilita o Cross-Origin Resource Sharing(CORS), permitindo que o front (rodando em um domínio diferente, como 'localhost:8080' ou servidor web) faça requisições para esta API.

 
  const config = new DocumentBuilder()
    .setTitle('ODAAP API')
    .setDescription('API documentation for ODAAP')
    .setVersion('1.0')
    .addTag('odaap')
    .build(); // Cria uma configuração para a documentação da API usando 'DocumentBuilder'. Define o título, descrição, versão e tags da API.

  const document = SwaggerModule.createDocument(app, config); // Gera o documento Swagger (OpenAPI) com base na aplicação e na configuração.

  SwaggerModule.setup('api-docs', app, document); // Configura o endpoint para a interface do Swagger UI, que estará disponível em /api-docs.

  await app.listen(process.env.PORT ?? 3000);
  console.log(`App running on port ${process.env.PORT ?? 3000}`); // Inicia o servidor NestJS na porta definida pela variável da ambiente 'PORT' ou na porta '3000' por padrão.
}
bootstrap();
