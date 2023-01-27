import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //instantiate AppModule:
  const app = await NestFactory.create(AppModule);
  //Launch server on port 3333
  await app.listen(3333);
}
bootstrap();
