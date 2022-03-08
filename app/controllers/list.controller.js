var shortUrl = require("node-url-shortener");

exports.decode = (req, res) => {
  const uri = req.body.url;
  const encoded = decodeURI(uri);
  res.json({ answer: encoded });
};

exports.encode = (req, res) => {
  const uri = req.body.url;
  const encoded = encodeURI(uri);
  res.json({ answer: encoded });
};
