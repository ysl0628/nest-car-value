import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 為了提高安全性或隱私性，因為這些標頭可能會暴露伺服器的資訊或時間戳記。
  (app as any).set('etag', false);
  app.use((req, res, next) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
