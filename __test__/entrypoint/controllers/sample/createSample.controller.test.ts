import { Application } from 'express';
import supertest from 'supertest';
import { Env } from '../../../../src/infrastructure/env';
import { Server } from '../../../../src/server';

// jest.mock('../../../../src/infrastructure/middlewares/registryMessage');

describe('CreateSampleControllerTest', () => {
  let server: Server;
  let app: Application;

  beforeAll(async (done) => {
    const env = new Env();
    server = new Server(env);
    app = server.getApp();

    done();
  });

  it('should return 201', async (done) => {
    const res = await supertest(app).post('/api/sample').send();

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({});

    done();
  });
});
