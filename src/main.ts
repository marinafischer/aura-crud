import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// arquivo raiz, todas as configuração do nest devem ser feitas nesse arquivo
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // pode inserir prefixo para todas as rotas
  app.setGlobalPrefix('');
  // vai usar os schemas para validar oq vem da requisição
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
