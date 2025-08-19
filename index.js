const express = require('express');
const path = require('path');
const app = express();
const PORT = 3005;
const PUBLIC_DIR = '//192.168.0.141/as-f/scambio/FOTODC_AGENTI';

app.get('/images/:imageName', (req, res) => {
  const imagePath = path.join(PUBLIC_DIR, req.params.imageName);
  res.sendFile(imagePath);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));