import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CountryController],
      providers: [CountryService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<CountryController>(CountryController);
      expect(appController.root()).toBe('Hello World!');
    });
  });
});
