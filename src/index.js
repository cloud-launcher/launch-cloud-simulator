import core from 'launch-cloud-core';

import DOWrapper from 'do-wrapper-browser';

import request from 'browser-request';

module.exports = (providerConfigs, log) => {
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
  }, log, request, 'http://localhost:3408');

  return api;
};