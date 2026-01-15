import handler from 'serve-handler';
import http from 'http';

const server = http.createServer((req, res) => {
  return handler(req, res, { public: 'public' });
});

server.listen(process.env.PORT || 3000);