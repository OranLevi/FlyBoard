const https = require('https');

function getDataApi(url, callback) {
  https.get(url, (httpsRes) => {
    let body = "";
    httpsRes.on("data", (chunk) => {
      body += chunk;
    });
    httpsRes.on("end", () => {
      try {
        let data = JSON.parse(body);
        let total = data.result.total;
        callback(null, data, total);
      } catch (error) {
        console.error(error.message);
        callback(error);
      }
    });
  }).on("error", (error) => {
    console.error(error.message);
    callback(error);
  });
}

module.exports = { getDataApi };