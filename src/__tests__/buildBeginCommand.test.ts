import 'jest-extended';

import ScanParameters from '../scanParameters';
import buildBeginCommand from '../buildBeginCommand';

describe('sonarScanner', () => {
  describe('buildBeginCommand', () => {
    it('Builds dotnet sonar scanner begin command', () => {
      const scanParameters: ScanParameters = {
        projectKey: 'project-key123',
        projectName: '123project-name312',
        organization: '412organization-name123',
        sonarHostUrl: 'https://sonarcloud.io',
        sonarToken: 'sonar-token123',
        verbose: false,
      } as ScanParameters;
      const command = buildBeginCommand(scanParameters);
      expect(command).toStartWith('dotnet-sonarscanner begin');
      expect(command).toContain(`-k:${scanParameters.projectKey}`);
      expect(command).toContain(`-n:${scanParameters.projectName}`);
      expect(command).toContain(`-o:${scanParameters.organization}`);
      expect(command).toContain(`-d:sonar.host.url=${scanParameters.sonarHostUrl}`);
      expect(command).toContain(`-d:sonar.login=${scanParameters.sonarToken}`);
      expect(command).not.toContain('-d:sonar.verbose=true');
      expect(command).toContain('-d:sonar.cs.opencover.reportsPaths=');
      expect(command).toContain('-d:sonar.cs.vstest.reportsPaths=');
    });
    it('Sets verbose flag when debug is set true', () => {
      const scanParameters: ScanParameters = {
        verbose: true,
      } as ScanParameters;
      const command = buildBeginCommand(scanParameters);
      expect(command).toContain('-d:sonar.verbose=true');
    });
  });
});
