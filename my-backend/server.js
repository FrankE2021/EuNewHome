const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Ruta para guardar el token
app.post('/api/saveToken', (req, res) => {
  const { token, userId } = req.body;
  // Aquí deberías guardar el token y userId en tu base de datos
  // Ejemplo: guardar en una base de datos MongoDB, SQL, etc.
  console.log(`Token: ${token}, UserId: ${userId}`);
  
  // Responder con éxito
  res.status(200).send('Token saved successfully');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
