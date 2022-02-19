import { endGroup, info, startGroup } from '@actions/core';
import { restoreCache, saveCache } from '@actions/cache';

const cacheKey = 'sonar-cache';
const paths = ['/home/runner/.sonar/cache'];

export const cachePlugins = async (): Promise<void> => {
  startGroup('Caching plugins...');
  const cacheId = await saveCache(paths, cacheKey);
  info(`Cached plugins with id: ${cacheId}`);
  endGroup();
};

export const restoreCachedPlugins = async (): Promise<void> => {
  startGroup('Restoring cached plugins...');
  const restoredCacheKey = await restoreCache(paths, cacheKey);
  info(`Restored plugins with key: ${restoredCacheKey}`);
  endGroup();
};
