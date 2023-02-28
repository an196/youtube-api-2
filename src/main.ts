import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable shutdown hooks explicitly.
  app.enableShutdownHooks();

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    allowedHeaders: '*',
    origin: [
      'http://localhost:4200',
      'https://youtube-eta-ten.vercel.app',
      'https://youtube-an196.vercel.app'
    ],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
