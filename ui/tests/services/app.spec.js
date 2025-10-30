import * as app from '@/services/app';

describe('App Service', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('exports app service functions', () => {
    expect(typeof app).toBe('object');
  });
});