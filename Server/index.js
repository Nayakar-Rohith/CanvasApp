const Express = require("express");
const canvas = require("./routes/canvas.js");

const app = Express();
const port = 5000;
const Cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const pdf = require("express-pdf");
const path = require("path");

app.use(Cors());

app.use(pdf);
app.use("/pdfFromHTML", function (req, res) {
  res.pdfFromHTML({
    filename: "generated.pdf",
    html: path.resolve(__dirname, "template.html"),
  });
});

app.use("/pdfFromHTMLString", canvas);

app.use("/pdf", function (req, res) {

  res.pdf(path.resolve(__dirname, "dummy.pdf"));
});

app.listen(port, () => {
  console.log(`server connected on port ${port}`);
});
