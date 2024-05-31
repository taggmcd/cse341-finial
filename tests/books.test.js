// Jest tests for books

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1);
  });
});

const axios = require('axios');

const url = 'http://localhost:3000/api/books';

describe('The router', () => {
  test('The get route', async () => {
    const res = await axios.get(url);

    expect(res).toBeTruthy();
    expect(res.status).toBe(200);
  });
});
