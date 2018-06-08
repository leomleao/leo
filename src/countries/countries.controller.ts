import { Body, Controller, Get, Post, Put, Param, Query, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountryDto } from './country.dto';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) { }

  @Get('')
  async findAll(@Query() query) {
     if (query && query.hasOwnProperty('lang')) {
     return await this.countriesService.findMany({language: query.lang});
     } else {
     return await this.countriesService.findAll();
  	 }
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createCountryDto: CountryDto) {
    return await this.countriesService.create(createCountryDto);
  }

  @Put()
  async update(@Body() updateCountryDto: CountryDto) {
    const code = updateCountryDto.code;
    if (!code){
      throw new HttpException('No country code given!', HttpStatus.BAD_REQUEST);
    }
    const countryToUpdate = await this.countriesService.findOne(code);
    if (!countryToUpdate) {
      throw new HttpException('Country doesnt exist!', HttpStatus.BAD_REQUEST);
    }
    return await this.countriesService.update(updateCountryDto);
  }

}