import { request } from 'http';
import { createReadStream } from 'fs';
import { basename, join } from 'path';

const filename = process.argv[2];
const serverHost = process.argv[3];

const requestOptions = {
  host: serverHost,
  port: 3000,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/octet-stream',
    // 'Content-Length': filename.length,
    'X-Filename': filename,
  },
};

const req = request(requestOptions, () => {
  console.log(`File sent: ${filename}`);
});

const destFilename = join('client_files', basename(filename));

createReadStream(destFilename, 'utf-8')
  .pipe(req)
  .on('data', (chunk) => {
    console.log('Chunk received: ', chunk);
  })
  .on('finish', () => {
    console.log('File sent', destFilename);
  });
