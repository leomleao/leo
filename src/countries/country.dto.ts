import { IsString, IsInt, IsNumber, Length } from 'class-validator';

//#TODO find the right validation for the commented lines
export class CreateCatDto {
  @IsString() @Length(3, 3) readonly code: string; //character(3);
  @IsString() readonly name: string;
  @IsString() readonly continent: string;
  @IsString() readonly region: string;
  @IsString() readonly surfacearea: string;
  @IsInt() readonly indepyear: smallint;
  @IsInt() readonly population: integer;
  @IsNumber() readonly lifeexpectancy: real;
  @IsNumber()readonly gnp: numeric(10,2);
  @IsNumber()readonly gnpold: numeric(10,2);
  @IsString() readonly localname: string;
  @IsString() readonly governmentform: string;
  @IsString() readonly headofstate: string;
  @IsInt() readonly capital: integer;
  @IsString() @Length(3, 3) readonly code2: string; //character(2);
}