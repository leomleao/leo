import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './country.service';
import { DBModule } from '../db/db.module';

@Module({
  modules: [DBModule],
  imports: [],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
