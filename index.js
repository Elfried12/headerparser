const express = require('express');
const app = express();

// Middleware pour les requêtes JSON
app.use(express.json());

// Point d'entrée API
app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress,
    language,
    software
  });
});

// Port d'écoute
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
