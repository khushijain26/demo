const express = require('express');
const app = express();
const port = 3000;

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello from the API server!');
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
