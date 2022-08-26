import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// arquivo raiz, todas as configuração do nest devem ser feitas nesse arquivo
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // pode inserir prefixo para todas as rotas
  app.setGlobalPrefix('');
  // vai usar os schemas para validar oq vem da requisição
  app.useGlobalPipes(new ValidationPipe());
  // configurações do OPENAPI
  // http://localhost:3000/api
  // http://localhost:3000/api-json
  const config = new DocumentBuilder()
    .setTitle('First Crud')
    .setDescription('First API using nest')
    .setVersion('1.0')
    .addTag('crud')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
