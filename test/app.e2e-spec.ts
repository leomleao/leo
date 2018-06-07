import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/countries (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/countries')
      .expect(200)
      .expect('Hello World!');
  });

  //Single country test
  it('/api/countries?lang=Dutch (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/countries?lang=Dutch')
      .expect(200)
      .expect('Hello World!');
  });

  //Multiple countries test
  it('/api/countries?lang=English (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/countries?lang=English')
      .expect(200)
      .expect('Hello World!');
  });

  it('/api/countries (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/api/countries (PUT)', () => {
    return request(app.getHttpServer())
      .put('/api/countries')
      .expect(200)
      .expect('Hello World!');
  });  
});
