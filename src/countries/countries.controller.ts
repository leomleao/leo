import { Body, Controller, Get, Post, Put, Param, Query, HttpCode, UseFilters, UsePipes, BadRequestException } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto, UpdateCountryDto } from './country.dto';
import { HttpExceptionFilter } from '../common/http-exception.filter';
import { ValidationPipe } from '../common/validation.pipe';

@Controller('countries')
@UseFilters(new HttpExceptionFilter())
@UsePipes(new ValidationPipe())
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
  async create(@Body() createCountryDto: CreateCountryDto) {
    return await this.countriesService.create(createCountryDto);
  }

  @Put()
  async update(@Body() updateCountryDto: UpdateCountryDto) {
    const code = updateCountryDto.code;
    if (!code){
      throw new BadRequestException('No country code given!');
    }
    const countryToUpdate = await this.countriesService.findOne(code);
    if (!countryToUpdate) {
      throw new BadRequestException('Country not found!');
    }
    return await this.countriesService.update(updateCountryDto);
  }

}