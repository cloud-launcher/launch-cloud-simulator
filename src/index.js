import core from 'launch-cloud-core';

import DOWrapper from 'do-wrapper-browser';

module.exports = providerConfigs => {
  if (providerConfigs === undefined || providerConfigs === null) throw Error('Must provide a providerConfigs object!');

  const api = core({
    providerApis: {
      aws: null,
      azure: null,
      digitalocean: DOWrapper,
      gce: null,
      rackspace: null
    },
    providerConfigs
  });

  return api;
};