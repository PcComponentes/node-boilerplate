import { Application } from 'express';
import supertest from 'supertest';
import { Env } from '../../src/infrastructure/env';
import { Server } from '../../src/server';

describe('Hello World API', () => {
  let server: Server;
  let app: Application;

  beforeAll(async (done) => {
    const env = new Env();
    server = new Server(env);
    app = server.getApp();

    done();
  });

  it('should return 200 when getting hello-world', async (done) => {
    const res = await supertest(app).get('/hello-world').send();

    expect(res.status).toBe(200);
    expect(res.text).toMatchSnapshot();

    done();
  });
});
