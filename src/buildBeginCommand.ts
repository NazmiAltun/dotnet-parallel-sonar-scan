import ScanParameters from './scanParameters';

const buildBeginCommand = (scanParameters: ScanParameters): string => {
  let command: string =
    'dotnet-sonarscanner begin ' +
    `-k:${scanParameters.projectKey} ` +
    `-o:${scanParameters.organization} ` +
    `-n:${scanParameters.projectName} ` +
    `-d:sonar.host.url=${scanParameters.sonarHostUrl}  ` +
    `-d:sonar.login=${scanParameters.sonarToken} ` +
    `-d:sonar.cs.opencover.reportsPaths=${scanParameters.testResultsPath}${scanParameters.opencoverReportsPaths} ` +
    `-d:sonar.cs.vstest.reportsPaths=${scanParameters.testResultsPath}${scanParameters.vstestReportsPaths} `;

  if (scanParameters.verbose) {
    command += '-d:sonar.verbose=true';
  }
  return command;
};

export default buildBeginCommand;
