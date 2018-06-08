import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { Language } from '../languages/language.entity';

@Entity('country')
export class Country {
  @PrimaryColumn()
  code: string;

  @Column()
  name: string;

  @Column()
  continent: string;

  @Column()
  region: string;

  @Column()
  surfacearea: string;

  @Column({
    nullable: true,
  })
  indepyear: number;

  @Column()
  population: number;

  @Column({
    nullable: true,
  })
  lifeexpectancy: number;

  @Column({
    nullable: true,
  })
  gnp: number;

  @Column({
    nullable: true,
  })
  gnpold: number;

  @Column()
  localname: string;

  @Column()
  governmentform: string;

  @Column({
    nullable: true,
  })
  headofstate: string;

  @Column({
    nullable: true,
  })
  capital: number;

  @Column()
  code2: string;

  @OneToMany(type => Language, language => language.country)
  languages: Language[];
}
