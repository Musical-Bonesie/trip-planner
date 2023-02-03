import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //instantiate AppModule:
  const app = await NestFactory.create(AppModule);

  // Make sure validation for auth pipe are applied
  // Adding whitelist removes any potential values that aren't defined in the DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  //Launch server on port 3333
  await app.listen(3333);
}
bootstrap();
