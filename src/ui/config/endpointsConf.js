const host = process.env.NODE_ENV ? '35.222.70.224:3000' : "localhost:8080";// kubernetes ingress ip 35.222.70.224
const baseApiUrl = `http://${host}`;

module.exports = {
  cors: {
    origin: '*', 
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Correlation-Id, T-Session-Token',
    credentials: true
  },
  languagesApi: `${baseApiUrl}/json_resources/ml.json`,
  menuApi: `${baseApiUrl}/json_resources/menu.json`  

};
