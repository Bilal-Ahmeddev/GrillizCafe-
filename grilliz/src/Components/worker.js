self.onmessage = function (e) {
    const data = e.data;
    // Simulate a long-running task
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i * data;
    }
    self.postMessage(result); // Post the result back to main thread
  };
  