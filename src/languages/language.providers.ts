import { Connection } from 'typeorm';

import { Language } from './language.entity';

export const languageProviders = [{
    provide: 'CountryLangRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Language),
    inject: ['DbConnectionToken'],
}];