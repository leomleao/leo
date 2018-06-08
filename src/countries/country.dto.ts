import { IsString, IsInt, IsNumber, Length } from 'class-validator';

export class CountryDto {
  @IsString() @Length(3, 3) readonly code: string;
  @IsString() readonly name: string;
  @IsString() readonly continent: string;
  @IsString() readonly region: string;
  @IsString() readonly surfacearea: string;
  @IsInt() readonly indepyear: number;
  @IsInt() readonly population: number;
  @IsNumber() readonly lifeexpectancy: number;
  @IsNumber() readonly gnp: number;
  @IsNumber() readonly gnpold: number;
  @IsString() readonly localname: string;
  @IsString() readonly governmentform: string;
  @IsString() readonly headofstate: string;
  @IsInt() readonly capital: number;
  @IsString() @Length(3, 3) readonly code2: string;
  readonly languages;
}