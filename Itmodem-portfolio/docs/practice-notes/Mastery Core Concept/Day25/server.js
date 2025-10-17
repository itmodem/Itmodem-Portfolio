const fs = require('fs');

const readStream = fs.createReadStream('Notes.docx', 'utf8');

readStream.on('data', (chunk) => {
  console.log(`Chunk size: ${chunk.length}`);
});
