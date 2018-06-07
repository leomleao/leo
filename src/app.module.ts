import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { CountriesModule } from './countries/countries.module';

@Module({
    modules: [CountriesModule],
})

export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/api/');
  }
}