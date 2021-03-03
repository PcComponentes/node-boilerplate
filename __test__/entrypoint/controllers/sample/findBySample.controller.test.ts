import { Application } from 'express';
import supertest from 'supertest';
import { Env } from '../../../../src/infrastructure/env';
import { Server } from '../../../../src/server';

// jest.mock('../../../../src/infrastructure/middlewares/registryMessage');

describe('FindBySampleControllerTest', () => {
  let server: Server;
  let app: Application;

  beforeAll(async (done) => {
    const env = new Env();
    server = new Server(env);
    app = server.getApp();

    done();
  });

  it('should return 200', async (done) => {
    const res = await supertest(app).get('/api/sample/75d6573e-d323-4814-af60-984dc886ffa7').send();

    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    expect(res.body).toMatchObject({
      uuid: '75d6573e-d323-4814-af60-984dc886ffa7',
      task: 'task 1',
    });

    done();
  });
});
