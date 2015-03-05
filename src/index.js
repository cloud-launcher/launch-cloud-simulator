import core from 'launch-cloud-core';
import DOWrapper from 'do-wrapper-browser';

module.exports = core({
  providers: {
    digitalocean: DOWrapper
  }
});