var warning = require('warning');

var ShouldBeTrue = false;

warning(
  ShouldBeTrue,
  'This thing should be true but you set to false. No soup for you!'
);