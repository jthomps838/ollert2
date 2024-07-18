import request from 'supertest';

import Server from '../../index';

const server = new Server(8080);
const app = server.getApp();

describe('Health Check', () => {
  it('should return the correct health check response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      version: '0.0.1',
      status: 'ok',
    });
  });
});
