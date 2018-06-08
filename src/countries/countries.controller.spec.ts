import { Test } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { countryProviders } from './country.providers';
import { DBModule } from '../db/db.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

async function setDevEnv() {
  await dotenv.config({silent: true, path: path.resolve(__dirname, '../../.env')});
}

setDevEnv();

describe('CountriesController', () => {
  let countriesController: CountriesController;
  let countriesService: CountriesService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
            modules: [DBModule],
            controllers: [CountriesController],
            providers: [
                ...countryProviders,
                CountriesService,
            ],
            exports: [CountriesService],
      }).compile();

    countriesService = module.get<CountriesService>(CountriesService);
    countriesController = module.get<CountriesController>(CountriesController);
  });

  // describe('findAll', () => {
  //   it('should return an array of all countries', async () => {
  //     const result = ['test'];
  //     jest.spyOn(countriesService, 'findAll').mockImplementation(() => result);

  //     expect(await countriesController.findAll()).toBe(result);
  //   });
  // });

  // describe('findAllwithLang', () => {
  //   it('should return an array of all countries with determined language', async () => {
  //     const result = ['test'];
  //     jest.spyOn(countriesService, 'findMany').mockImplementation(() => result);

  //     expect(await countriesController.findAll()).toBe(result);
  //   });
  // });

  describe('findAll', () => {
    it('should return an array of all countries', async () => {
      const result = ['test'];
      jest.spyOn(countriesService, 'findAll').mockImplementation(() => result);

      expect(await countriesController.findAll()).toBe(result);
    });
  });
});