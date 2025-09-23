import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,          // strips properties not in DTO
      forbidNonWhitelisted: true, // throws error for unknown props
      transform: true,          // auto-transform payloads into DTO classes
    }));
    app.enableCors({
      origin: process.env.ENVIRONMENT === 'development' ? 'http://localhost:5173' : process.env.CORS_ORIGIN,
      credentials: true,
    });
    await app.listen(process.env.PORT || 3000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
  } catch (error) {
    console.error(`Failed to start application: ${error.message}`);
    setTimeout(bootstrap, 5000);
  }
}
bootstrap();
