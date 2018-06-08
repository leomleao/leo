import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { countryProviders } from './country.providers';
import { DBModule } from '../db/db.module';

@Module({
  modules: [DBModule],
  controllers: [CountriesController],
  providers: [
      ...countryProviders,
      CountriesService,
  ],
  exports: [CountriesService],
})
export class CountriesModule {}
