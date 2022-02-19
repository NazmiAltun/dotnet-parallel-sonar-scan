const delay = (waitDurationInSec: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, waitDurationInSec * 1000));
};

export default delay;
