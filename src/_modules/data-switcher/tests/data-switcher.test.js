'use strict';

var DataSwitcher = require('../data-switcher');

describe('DataSwitcher View', function() {

  beforeEach(function() {
    this.dataSwitcher = new DataSwitcher();
  });

  it('Should run a few assertions', function() {
    expect(this.dataSwitcher);
  });

});
