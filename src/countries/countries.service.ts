import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Country } from './country.entity';
import { CountryLang } from './countrylang.entity';

@Injectable()
export class CountriesService {
  constructor( @Inject('CountryRepositoryToken') private readonly countryRepository: Repository<Country>) { }

  async findAll(): Promise<Country[]> {
    try {
      return await this.countryRepository.find();
    } catch (err) {
      return err;
    }
  }

  //#TODO Still need to work with this query.
  async findMany(conds: object) {
    try {
      return await this.countryRepository.createQueryBuilder("country")
                  .leftJoinAndSelect("country.countrylang", "countrylang")
                  .where("country.countrycode = :language", conds)
                  .getOne();
    } catch (err) {
      return err;
    }
  }

  async create(country: Country) {
    try {
      return await this.countryRepository.save(country);
    } catch (err) {
      return err;
    }
  }

  async save(country: Country) {
    try {
      return await this.countryRepository.save(country);
    } catch (err) {
      return err;
    }
  }  
}
