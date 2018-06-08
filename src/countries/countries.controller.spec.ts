import { Test } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { countryProviders } from './country.providers';
import { DBModule } from '../db/db.module';
import newCountry from '../tests/newCountry';
import upCountry from '../tests/upCountry';
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

  describe('findAll GET/', () => {
    it('should return an array of all countries', async () => {
      const result = ['test'];
      jest.spyOn(countriesService, 'findAll').mockImplementation(() => result);

      expect(await countriesController.findAll()).toBe(result);
    });
  });

  describe('findAllwithLang GET/?lang', () => {
    it('should return an array of all countries which have Portuguese as official language', async () => {
      const result = ['test'];
      const conds = { language: "Portuguese" };
      jest.spyOn(countriesService, 'findMany').mockImplementation((conds) => result);

      expect(await countriesController.findAll({ lang: "Portuguese" })).toBe(result);
    });
  });

  describe('create new country POST/', () => {
    it('should create a new country in DB', async () => {
      const result = ['test'];
      jest.spyOn(countriesService, 'create').mockImplementation((newCountry) => result);

      expect(await countriesController.create(newCountry)).toBe(result);
    });
  });

  describe('create new country PUT/', () => {
    it('should update created country in DB', async () => {
      const result = ['test'];
      jest.spyOn(countriesService, 'update').mockImplementation((upCountry) => result);

      expect(await countriesController.update(upCountry)).toBe(result);
    });
  });

});