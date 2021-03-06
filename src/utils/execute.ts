import { ExecOptions, exec } from '@actions/exec';

export interface ExecResult {
  success: boolean;
  stdout: string;
  stderr: string;
}

export const execute = async (
  command: string,
  args: string[] = [],
  silent?: boolean,
  stdin?: string,
): Promise<ExecResult> => {
  let stdout = '';
  let stderr = '';

  const options: ExecOptions = {
    silent,
    ignoreReturnCode: true,
    input: Buffer.from(stdin || ''),
  };
  options.listeners = {
    stdout: (data: Buffer) => {
      stdout += data.toString();
    },
    stderr: (data: Buffer) => {
      stderr += data.toString();
    },
  };

  const returnCode: number = await exec(command, args, options);

  return {
    success: returnCode === 0,
    stdout: stdout.trim(),
    stderr: stderr.trim(),
  };
};
