const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from NodeApp Demo 🚀 running on AWS Ubuntu!');
  res.send('this is ci/cd works code🥳'');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
