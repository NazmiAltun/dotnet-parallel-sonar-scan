interface ScanParameters {
  readonly projectKey: string;
  readonly organization: string;
  readonly projectName: string;
  readonly sonarHostUrl: string;
  readonly sonarToken: string;
  readonly verbose: boolean;
  readonly testResultArtifacts: string[];
  readonly dotnetBuildCommand: string;
  readonly testResultsPath: string;
  readonly currentWorkingDir: string;
  readonly coverageSolutionRootPath: string;
  readonly opencoverReportsPaths: string;
  readonly vstestReportsPaths: string;
  readonly sonarScannerVersion: string;
  readonly coverageArtifactPoolingTimeoutSec: number;
}
export default ScanParameters;
