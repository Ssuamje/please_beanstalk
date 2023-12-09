import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: ["http://gleefy.net", "https://gleefy.net"],
  //   credentials: true,
  //   exposedHeaders: ['Authorization'],
  // });
  await app.listen(3000);
}
bootstrap();
