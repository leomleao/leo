import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Country } from '../countries/country.entity';

@Entity('countrylanguage')
export class Language {
  @PrimaryColumn()
  countrycode: string;

  @Column()
  language: string;

  @Column()
  isofficial: boolean;

  @Column()
  percentage: number;

  @ManyToOne(type => Country, country => country.languages)
  @JoinColumn({ name: 'countrycode' })
  country: Country;

}
