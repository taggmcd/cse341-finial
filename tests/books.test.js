// Jest tests for books
const request = require('supertest');

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1);
  });
});

const url = 'http://localhost:3000/api/books';

describe('Get /api/books', () => {
  it('should respond with 200 status code', async () => {
    const res = await request(url).get('/').set('Accept', 'application/json');

    expect(res).toBeTruthy();
    expect(res.status).toBe(200);
  });
});

describe('Get /api/books/66524ba5da10315bc173ef8e', () => {
  it('should respond with 200 status code', async () => {
    const res = await request(url)
      .get('/66524ba5da10315bc173ef8e')
      .set('Accept', 'application/json');

    expect(res).toBeTruthy();
    expect(res.status).toBe(200);
  });
});

describe('Get /api/books/66524ba5da10315bc173ef8b', () => {
  it('should respond with 404 status code if not found', async () => {
    const res = await request(url)
      .get('/66524ba5da10315bc173ef8b')
      .set('Accept', 'application/json');

    expect(res).toBeTruthy();
    expect(res.status).toBe(404);
  });
});

describe('POST /api/books', () => {
  it('should respond with 401 status code if unauthorized', async () => {
    const response = await request(url)
      .post('/')
      .send({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        isbn: '978-0-300-18351-5',
        publisher: 'The Great Gatsby',
        pages: 256,
        price: 12.99,
        tags: ['fiction', 'novel', 'F. Scott Fitzgerald'],
      })
      .set('Accept', 'application/json');

    expect(response.status).toBe(401);
  });
});

describe('PUT /api/books', () => {
  it('should respond with 401 status code if unauthorized', async () => {
    const response = await request(url)
      .put('/66526e48ceb07a9792f31a53')
      .send({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        isbn: '978-0-300-18351-5',
        publisher: 'The Great Gatsby',
        pages: 256,
        price: 15,
        tags: ['fiction', 'novel'],
      })
      .set('Accept', 'application/json');

    expect(response.status).toBe(401);
  });
});

describe('DELETE /api/books', () => {
  it('should respond with 401 status code if unauthorized', async () => {
    const response = await request(url)
      .delete('/66526e48ceb07a9792f31a53')
      .set('Accept', 'application/json');

    expect(response.status).toBe(401);
  });
});
