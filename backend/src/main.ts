import { NestFactory } from '@nestjs/core';

import { AppModule } from "./app.module";
import { Config } from "./config/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5200);
}
bootstrap();
