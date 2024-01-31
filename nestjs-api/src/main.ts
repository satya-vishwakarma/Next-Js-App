import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)
  const portNumber = config.get('port')
  app.setGlobalPrefix('api')
  await app.listen(portNumber);
  console.log(`~ Application is running on: ${portNumber}`);
}
bootstrap();
