import delay from '../delay';

describe('delay', () => {
  it('should delay for given time', async () => {
    const delayDurationInSec = 1;
    const startTime = Date.now();
    await delay(delayDurationInSec);
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;
    expect(duration).toBeGreaterThanOrEqual(delayDurationInSec);
  });
});
