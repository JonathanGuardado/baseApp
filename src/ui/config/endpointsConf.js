const PORT = process.env.PORT || 8080;
const host = process.env.POD_IP || "localhost";
const baseApiUrl = `http://${host}:${PORT}`;

module.exports = {
  cors: {
    origin: '*', 
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Correlation-Id, T-Session-Token',
    credentials: true
  },
  languagesApi: `${baseApiUrl}/json_resources/ml.json`,
  menuApi: `${baseApiUrl}/json_resources/menu.json`  

};
