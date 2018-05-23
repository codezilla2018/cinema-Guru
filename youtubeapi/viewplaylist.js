const {google} = require('googleapis');

// Each API may support multiple version. With this sample, we're getting
// v1 of the urlshortener API, and using an API key to authenticate.
const urlshortener = google.urlshortener({
  version: 'v1',
  auth: 'AIzaSyCKocDBGZVDoVmihe__Kir89M1nBO6kphI'
});

const params = {
  shortUrl: 'http://goo.gl/xKbRu3'
};

// get the long url of a shortened url
urlshortener.url.get(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`Long url is ${res.data.longUrl}`);
});