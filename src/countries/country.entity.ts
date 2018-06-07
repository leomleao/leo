import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Country {
  @PrimaryColumn()
  code: character(3);

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
  indepyear: smallint;

  @Column()
  population: integer;

  @Column({
    nullable: true,
  })
  lifeexpectancy: real;

  @Column({
    nullable: true,
  })
  gnp: numeric(10,2);

  @Column({
    nullable: true,
  })
  gnpold: numeric(10,2);

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
  capital: integer;

  @Column()
  code2: character(2);

}
