const request = require('supertest');
const express = require('express');
const bugRoutes = require('../routes/bugs');
const Bug = require('../models/Bug');

jest.mock('../models/Bug');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);

describe('Bug API', () => {
  afterEach(() => jest.clearAllMocks());

  it('GET /api/bugs returns bugs', async () => {
    Bug.find.mockResolvedValue([{ title: 'Bug1', description: 'desc', status: 'open' }]);
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body[0].title).toBe('Bug1');
  });

  it('POST /api/bugs creates a bug', async () => {
    Bug.prototype.save = jest.fn().mockResolvedValue({ title: 'Bug2', description: 'desc', status: 'open' });
    const res = await request(app).post('/api/bugs').send({ title: 'Bug2', description: 'desc', status: 'open' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Bug2');
  });
}); 