import { cachePlugins, restoreCachedPlugins } from './caching';
import ScanParameters from './scanParameters';
import buildBeginCommand from './buildBeginCommand';
import downloadTestResultArtifacts from './downloadTestResultArtifacts';
import { execute } from './utils/execute';
import fixCoveragePath from './fixCoveragePath';
import getScanParameters from './getScanParameters';
import { info } from '@actions/core';
import installDotnetSonarScanner from './installDotnetSonarScanner';

const runBeginCommand = async (scanParameters: ScanParameters): Promise<void> => {
  await execute(buildBeginCommand(scanParameters));
};

const runEndCommand = async (scanParameters: ScanParameters): Promise<void> => {
  await execute(`dotnet-sonarscanner end -d:sonar.login=${scanParameters.sonarToken}`);
};

const scan = async (): Promise<void> => {
  info('Sonar Scan started...');

  const scanParameters: ScanParameters = getScanParameters();
  await installDotnetSonarScanner(scanParameters);
  await restoreCachedPlugins();
  await runBeginCommand(scanParameters);
  await execute(scanParameters.dotnetBuildCommand);
  await downloadTestResultArtifacts(scanParameters);
  await fixCoveragePath(scanParameters);
  await runEndCommand(scanParameters);
  await cachePlugins();
};

export default scan;
