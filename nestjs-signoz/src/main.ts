import { NestFactory } from '@nestjs/core';
import tracer from './tracer';
import { AppModule } from './app.module';

async function bootstrap() {
  await tracer.start();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
