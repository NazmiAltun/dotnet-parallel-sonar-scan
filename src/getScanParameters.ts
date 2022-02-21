import ScanParameters from './scanParameters';
import { context } from '@actions/github';
import { getInput } from '@actions/core';

const getScanParameters = (): ScanParameters => {
  let projectKey = getInput('project-key');
  let organization = getInput('organization');
  let projectName = getInput('project-name');

  if (projectKey === '') {
    projectKey = `${context.repo.owner}_${context.repo.repo}`;
  }

  if (organization === '') {
    organization = context.repo.owner.toLowerCase();
  }

  if (projectName === '') {
    projectName = context.repo.repo;
  }

  return {
    projectKey,
    organization,
    projectName,
    testResultsPath: 'TestResults',
    currentWorkingDir: process.env.GITHUB_WORKSPACE,
    sonarHostUrl: getInput('sonar-host-url'),
    sonarToken: getInput('sonar-token', { required: true }),
    verbose: getInput('verbose').toLocaleLowerCase() === 'true',
    dotnetBuildCommand: getInput('dotnet-build-command'),
    coverageSolutionRootPath: getInput('coverage-solution-root-path'),
    opencoverReportsPaths: getInput('opencover-reports-paths'),
    vstestReportsPaths: getInput('vstest-reports-paths'),
    sonarScannerVersion: getInput('sonar-scanner-version'),
    coverageArtifactPoolingTimeoutSec: parseInt(getInput('coverage-artifact-pooling-timeout-sec')),
    testResultArtifacts: getInput('test-result-artifacts')
      .split(',')
      .filter(s => s),
  } as ScanParameters;
};

export default getScanParameters;
