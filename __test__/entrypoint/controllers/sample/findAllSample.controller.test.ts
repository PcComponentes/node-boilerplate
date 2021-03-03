import { Application } from 'express';
import supertest from 'supertest';
import { Env } from '../../../../src/infrastructure/env';
import { Server } from '../../../../src/server';

// jest.mock('../../../../src/infrastructure/middlewares/registryMessage');

describe('FindAllSampleControllerTest', () => {
  let server: Server;
  let app: Application;

  beforeAll(async (done) => {
    const env = new Env();
    server = new Server(env);
    app = server.getApp();

    done();
  });

  it('should return 200', async (done) => {
    const res = await supertest(app).get('/api/sample').send();

    expect(res.status).toBe(200);

    done();
  });
});
