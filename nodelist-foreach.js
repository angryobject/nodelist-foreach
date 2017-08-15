(function(self) {
  'use strict';

  if (self.NodeList.prototype.forEach) {
    return;
  }

  self.NodeList.prototype.forEach = function forEach(cb, thisArg) {
    for (var i = 0; i < this.length; i++) {
      cb.call(thisArg, this[i], i, this);
    }
  };
})(typeof self !== 'undefined' ? self : this);
