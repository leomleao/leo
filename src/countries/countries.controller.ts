import { Body, Controller, Get, Post, Put, Param, Query, HttpException, HttpException } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller()
export class CountriesController {

  constructor(private readonly countriesService: CountriesService) { }

  @Get(':lang')
  async find(@Query() lang : string) {
  	 if (lang) {
     return await this.countriesService.findMany({language: lang});
  	 } else {
     return await this.countriesService.findAll();
  	 }
  }

  @Put()
  async reserve(@Body() body) {
    const tool = await this.countriesService.findOne(body.toolId);
    if (!tool.in_use || !tool.since) {
      tool.in_use = body.employeeId;
      tool.since = new Date();

      return await this.countriesService.save(tool);

    } else {

      throw new HttpException('Tool already in Use!', HttpStatus.BAD_REQUEST);

    }
  }

  @Post()
  async create( @Body() createCompanyDto: CreateCompanyDto) {
    // const newCompany = Object.assign({}, createCompanyDto, {
    //   created_at: new Date(),
    //   password: null,
    // });
    return this.countriesService.create(newCompany);
  }

}
