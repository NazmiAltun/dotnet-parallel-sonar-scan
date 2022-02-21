import { endGroup, startGroup } from '@actions/core';
import ScanParameters from './scanParameters';
import { execute } from './utils/execute';

const fixCoveragePath = async (scanParameters: ScanParameters): Promise<void> => {
  startGroup(
    `Fixing code coverage path by replacing ${scanParameters.coverageSolutionRootPath} with ${scanParameters.currentWorkingDir} `,
  );
  await execute(
    `find ${scanParameters.testResultsPath} -name *.xml -prune -false -o -type f -exec
      sed -i "s@${scanParameters.coverageSolutionRootPath}@${scanParameters.currentWorkingDir}@g" "{}" +`,
  );
  endGroup();
};

export default fixCoveragePath;
