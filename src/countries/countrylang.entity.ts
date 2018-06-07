import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Country } from "./country.entity";

@Entity()
export class CountryLang {
  @PrimaryColumn()
  countrycode: character(3);

  @Column()
  language: string;

  @Column()
  isofficial: boolean;

  @Column()
  percentage: real;

  @OneToOne(type => Country)
    @JoinColumn()
    country: Country;
}
