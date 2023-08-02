import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
const PORT = process.env.PORT || 3000;

async function start() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(PORT, () =>
    console.log(`The server is running on port ${PORT}`),
  );
}
start();
