const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Missing crucial error handling here!  What if req.body is malformed or empty?
  console.log(data.someProperty); // Boom! Error if someProperty doesn't exist.
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));