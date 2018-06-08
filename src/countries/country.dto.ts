import { IsString, IsInt, IsNumber, Length, IsOptional } from 'class-validator';

export class CreateCountryDto {
  @IsString() @Length(3, 3) readonly code: string;
  @IsString() readonly name: string;
  @IsString() readonly continent: string;
  @IsString() readonly region: string;
  @IsInt() readonly surfacearea: number;
  @IsOptional() @IsInt() readonly indepyear: number;
  @IsInt() readonly population: number;
  @IsOptional() @IsNumber() readonly lifeexpectancy: number;
  @IsOptional() @IsNumber() readonly gnp: number;
  @IsOptional() @IsNumber() readonly gnpold: number;
  @IsString() readonly localname: string;
  @IsString() readonly governmentform: string;
  @IsOptional() @IsString() readonly headofstate: string;
  @IsOptional() @IsInt() readonly capital: number;
  @IsString() @Length(2, 2) readonly code2: string;
  @IsOptional() readonly languages;
}

export class UpdateCountryDto {
  @IsString() @Length(3, 3) readonly code: string;
  @IsOptional() @IsString() readonly name: string;
  @IsOptional() @IsString() readonly continent: string;
  @IsOptional() @IsString() readonly region: string;
  @IsOptional() @IsInt() readonly surfacearea: number;
  @IsOptional() @IsInt() readonly indepyear: number;
  @IsOptional() @IsInt() readonly population: number;
  @IsOptional() @IsNumber() readonly lifeexpectancy: number;
  @IsOptional() @IsNumber() readonly gnp: number;
  @IsOptional() @IsNumber() readonly gnpold: number;
  @IsOptional() @IsString() readonly localname: string;
  @IsOptional() @IsString() readonly governmentform: string;
  @IsOptional() @IsString() readonly headofstate: string;
  @IsOptional() @IsInt() readonly capital: number;
  @IsOptional() @IsString() @Length(2, 2) readonly code2: string;
  @IsOptional() readonly languages;
}