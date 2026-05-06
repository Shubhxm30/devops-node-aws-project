const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>NodeApp</title>
        <style>
          body {
            font-family: Arial;
            background: linear-gradient(to right, #1e3c72, #2a5298);
            color: white;
            text-align: center;
            padding-top: 100px;
          }
          .card {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            display: inline-block;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }
          h1 {
            font-size: 40px;
          }
          p {
            font-size: 18px;
            opacity: 0.9;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 NodeApp Deployed</h1>
          <p>Hello from AWS Linux!</p>
          <p>CI/CD Pipeline is working successfully 🎉</p>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
