const http = require("http");

http.createServer((req, res) => {
  res.end("Railway VPS Aktif");
}).listen(process.env.PORT || 3000);
