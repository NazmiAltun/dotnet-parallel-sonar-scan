import { endGroup, startGroup } from '@actions/core';
import { execute } from './utils/execute';

const installDotnetSonarScanner = async (): Promise<void> => {
  startGroup('Installing dotnet sonarscanner tool...');
  await execute('dotnet tool install --global dotnet-sonarscanner');
  endGroup();
};

export default installDotnetSonarScanner;
