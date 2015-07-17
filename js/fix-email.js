(function () {
  /*jslint loopfunc: true, browser: true*/
  'use strict';

  var fixEmail = function () {
    document.getElementById('jkmail').href = 'mailto:' + ['medleyj','uw.edu'].join('@');
    document.getElementById('jkmail').innerHTML = ['medleyj','uw.edu'].join('@');
  };

  fixEmail();
})();