import { Connection } from 'typeorm';

import { CountryLang } from './countrylang.entity';

export const countryLangProviders = [{
    provide: 'CountryLangRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(CountryLang),
    inject: ['DbConnectionToken'],
}];