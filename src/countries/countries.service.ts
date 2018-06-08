import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Country } from './country.entity';

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

  // #TODO Still need to work with this query.
  async findMany(conds: object) {
    try {
      return await this.countryRepository.createQueryBuilder('Country')
                  .leftJoinAndSelect('Country.languages', 'Language')
                  .where('Language.language = :language', conds )
                  .andWhere('Language.isofficial = :isofficial', { isofficial: true} )
                  // Not speficied if should include only countries where the language is official, normally one would conclude that yes.
                  .getMany();
    } catch (err) {
      return err;
    }
  }

  async findOne(countryCode: string) {
    try {
      return await this.countryRepository.findOne({ where: { code: countryCode }});
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

  async update(country: Country) {
    try {
      return await this.countryRepository.save(country);
    } catch (err) {
      return err;
    }
  }
}