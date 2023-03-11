const express = require("express");
const router = express.Router();
const { getDataApi } = require('./api.js');

router.get("/flights", (req, res) => {
  const url = `https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5`;
  getDataApi(url, (err, data, total) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }
    const urlWithTotal = `https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=${total}`;
    getDataApi(urlWithTotal, (err, data) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send(data);
    });
  });
});

router.get("/travelWarnings", (req, res) => {
  const url = `https://data.gov.il/api/3/action/datastore_search?resource_id=2a01d234-b2b0-4d46-baa0-cec05c401e7d`;
  getDataApi(url, (err, data, total) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }
    const urlWithTotal = `https://data.gov.il/api/3/action/datastore_search?resource_id=2a01d234-b2b0-4d46-baa0-cec05c401e7d&limit=${total}`;
    getDataApi(urlWithTotal, (err, data) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send(data);
    });
  });
});

module.exports = router;