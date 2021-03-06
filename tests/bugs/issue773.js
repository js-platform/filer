'use strict';
const util = require('../lib/test-utils.js');

describe('unexpected failures when calling fs functions (e.g. writeFile) with empty options object, issue 773', function() {
  beforeEach(util.setup);
  afterEach(util.cleanup);

  it('should call fs.writeFile with an empty options object', function(done) {
    const fs = util.fs();
    fs.writeFile('/a', 'trololol', {}, done);
  });
});
