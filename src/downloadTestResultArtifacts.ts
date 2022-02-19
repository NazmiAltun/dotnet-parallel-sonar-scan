import ScanParameters from './scanParameters';

import { create } from '@actions/artifact';
import delay from './utils/delay';
import { info } from '@actions/core';

const maxRetry = 200;
const retryDurationInSecond = 3;
const artifactClient = create();

const downloadArtifact = async (
  artifactName: string,
  scanParameters: ScanParameters,
): Promise<void> => {
  info(`Waiting for artifact to be uploaded: ${artifactName}`);

  for (let retryCount = 0; retryCount < maxRetry; retryCount++) {
    try {
      await artifactClient.downloadArtifact(artifactName, scanParameters.testResultsPath);
      info(`Artifact: ${artifactName} downloaded`);
      break;
    } catch (error: unknown) {
      if (scanParameters.verbose) {
        info((error as Error).message);
        info(`Waiting for artifact : ${artifactName}  to be uploaded`);
      }
      await delay(retryDurationInSecond);
    }
  }
};

const downloadTestResultArtifacts = async (scanParameters: ScanParameters): Promise<void> => {
  if (scanParameters.testResultArtifacts.length === 0) {
    return;
  }
  await Promise.all(
    scanParameters.testResultArtifacts.map(artifactName =>
      downloadArtifact(artifactName, scanParameters),
    ),
  );
};

export default downloadTestResultArtifacts;
