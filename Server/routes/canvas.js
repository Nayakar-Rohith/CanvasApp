const Express = require("express");
const canvas = Express.Router();

const fs = require("fs");
var url = "";
canvas
  .route("/")
  .post((req, res, next) => {

    url = req.body.data;
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "application/json");
    res.end("Will send all the dishes to you");
  })
  .get((req, res, next) => {

    res.pdfFromHTML({
      filename: "generated.pdf",
      htmlContent: `<html><body><img src=${url}/></body></html>`,
    });
    res.statusCode = 200;
    res.setHeader = ("Content-Type", "text/plain");

  });

module.exports = canvas;
