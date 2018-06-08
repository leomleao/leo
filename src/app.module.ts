import { Module } from '@nestjs/common';

import { CountriesModule } from './countries/countries.module';

@Module({
    modules: [CountriesModule],
})

export class AppModule {}