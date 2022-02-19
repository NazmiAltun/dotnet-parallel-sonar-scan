import * as exec from '@actions/exec'; /* eslint-disable-line import/no-namespace */

import { execute } from '../execute';

let executedCommand: {
  commandLine: string;
  args?: string[];
  options?: exec.ExecOptions;
};

describe('execute', () => {
  beforeAll(() => {
    jest
      .spyOn(exec, 'exec')
      .mockImplementation(
        (commandLine: string, args?: string[], options?: exec.ExecOptions): Promise<number> => {
          executedCommand = {
            commandLine,
            args,
            options,
          };

          return Promise.resolve(0);
        },
      );
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should execute command with given parameters', async () => {
    const result = await execute('docker', ['logout', 'hub.docker.com'], false);
    expect(result.success).toBeTruthy();
    expect(executedCommand.commandLine).toContain('docker');
    expect(executedCommand.args).toContain('logout');
    expect(executedCommand.args).toContain('hub.docker.com');
  });
});
