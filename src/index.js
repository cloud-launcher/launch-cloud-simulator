import core from 'launch-cloud-core';

import DOWrapper from 'do-wrapper-browser';

module.exports = providerConfigs => {
  if (providerConfigs === undefined || providerConfigs === null) throw Error('Must provide a providerConfigs object!');

  const api = core({
    providerApis: {
      amazon: null,
      digitalocean: DOWrapper,
      google: null,
      microsoft: null,
      rackspace: null
    },
    providerConfigs
  });

  return api;
};