const request = config => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener("load", function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(this.responseText);
        } else {
          reject(this.status);
        }
      });
  
      xhr.addEventListener('error', function() {
        reject('No internet');
      });
    
      xhr.addEventListener('timeout', function() {
        reject('Timeout');
      });
  
      xhr.open(config.method || 'GET', config.url);
      xhr.send();
    });
  };