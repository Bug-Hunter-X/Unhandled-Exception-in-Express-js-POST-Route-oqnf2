const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Check if request body is present and has the expected property
  if (!data || !data.someProperty) {
    return res.status(400).json({ error: 'Bad Request: Missing or malformed data' });
  }
  try {
    console.log(data.someProperty);
    res.send('Data received');
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));