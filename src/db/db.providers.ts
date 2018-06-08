import { createConnection } from 'typeorm';
import { Country } from '../countries/country.entity';
import { Language } from '../languages/language.entity';

export const dbProvider =
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [
        Country,
        Language,
      ],
      logging: true, // #TODO remove this before PROD ready
    }),
  };
