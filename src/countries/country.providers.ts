import { Connection } from 'typeorm';
import { Country } from './country.entity';

export const countryProviders = [{
    provide: 'CountryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Country),
    inject: ['DbConnectionToken'],
}];
