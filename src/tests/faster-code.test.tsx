import { createMocks } from 'node-mocks-http';
import handler from '../pages/api/validate-signup-form';

describe('validate-signup-form API', () => {
  it('should return an error if the username is less than 3 characters', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: 'ab',
        email: 'test@example.com',
        password: 'pass123',
        confirmPassword: 'pass123',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = res._getData().toLowerCase();
    expect(data.includes('username') || data.includes('error') || data.includes('failure')).toBe(true);
  });

  it('should return success if all fields are valid', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        username: 'abc',
        email: 'test@example.com',
        password: 'pass123',
        confirmPassword: 'pass123',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = res._getData().toLowerCase();
    expect(data.includes('success') || data.includes('successful')).toBe(true);
  });
});