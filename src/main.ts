import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { authenticate } from './middleware/auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(authenticate);
  await app.listen(3000);
}
bootstrap();
