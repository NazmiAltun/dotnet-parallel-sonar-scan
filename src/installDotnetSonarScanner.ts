import { endGroup, startGroup } from '@actions/core';
import ScanParameters from './scanParameters';
import { execute } from './utils/execute';

const installDotnetSonarScanner = async (scanParameters: ScanParameters): Promise<void> => {
  startGroup('Installing dotnet sonarscanner tool...');
  let installToolCommand = 'dotnet tool install --global dotnet-sonarscanner';
  if (scanParameters.sonarScannerVersion) {
    installToolCommand += ` --version ${scanParameters.sonarScannerVersion}`;
  }
  await execute(installToolCommand);
  endGroup();
};

export default installDotnetSonarScanner;
