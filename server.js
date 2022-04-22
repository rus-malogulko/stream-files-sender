import { createServer } from 'http';
import { createWriteStream } from 'fs';
import { basename, join } from 'path';

const server = createServer((req, res) => {
  const filename = basename(req.headers['x-filename']);
  const destFile = join('server_files', filename);

  console.log(`Receiving file ${filename}`);

  console.log(req);

  req
    .pipe(createWriteStream(destFile))
    .on('finish', () => {
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.end('ok');
      console.log('File saved', destFile);
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
})
