"use strict";

self.onmessage = function (e) {
  var data = e.data; // Simulate a long-running task

  var result = 0;

  for (var i = 0; i < 1000000; i++) {
    result += i * data;
  }

  self.postMessage(result); // Post the result back to main thread
};
//# sourceMappingURL=worker.dev.js.map
