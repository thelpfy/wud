import { getLogIcon, getLogs } from '@/services/log';

describe('Log Service', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should return log icon', () => {
    expect(getLogIcon()).toBe('mdi-bug');
  });
});