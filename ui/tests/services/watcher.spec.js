import { getWatcherIcon, getWatchers } from '@/services/watcher';

describe('Watcher Service', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should return watcher icon', () => {
    expect(getWatcherIcon()).toBe('mdi-update');
  });
});