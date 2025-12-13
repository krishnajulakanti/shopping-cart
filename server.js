// server.js (robust CORS + json-server)
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// small helper to allow credentials when needed
const cors = require('cors');

const allowedOrigins = [
  'http://13.201.7.94',    // your EC2 frontend origin
  'http://localhost:3000', // local dev, if you use it
  'http://localhost:5001'  // optional
];

const corsOptionsDelegate = function (req, callback) {
  const origin = req.header('Origin');
  // if origin is allowed, echo it back; otherwise don't allow
  if (allowedOrigins.indexOf(origin) !== -1) {
    callback(null, {
      origin: origin,
      credentials: true, // allow cookies
      methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
      allowedHeaders: ['Content-Type','Authorization','Accept','X-Requested-With']
    });
  } else {
    // allow all origins as fallback (if you don't use credentials)
    callback(null, {
      origin: true,
      methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS']
    });
  }
};

server.use((req, res, next) => {
  // quick response for health check / manifest requests to avoid 404 noise
  if (req.url.includes('%PUBLIC_URL%')) {
    return res.status(404).end();
  }
  next();
});

server.use(cors(corsOptionsDelegate));
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 5001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server with robust CORS running at http://0.0.0.0:${PORT}`);
});





// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
// const cors = require('cors')

// server.use(cors())           // enable ALL CORS requests
// server.use(middlewares)
// server.use(router)

// const PORT = process.env.PORT || 5000
// server.listen(PORT, '0.0.0.0', () => {
//   console.log(`JSON Server with CORS running at http://0.0.0.0:${PORT}`)
// })
