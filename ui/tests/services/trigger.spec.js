import { getTriggerIcon, getTriggers, runTrigger } from '@/services/trigger';

describe('Trigger Service', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should return trigger icon', () => {
    expect(getTriggerIcon()).toBe('mdi-bell-ring');
  });
});