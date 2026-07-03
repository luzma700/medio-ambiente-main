const express = require('express');
const app = express();

// Endpoints ambientales
app.get('/api/ambiente/petroleo', (req, res) => {
  res.json({
    titulo: "Contaminación por petróleo en el mar",
    descripcion: "Los derrames de petróleo afectan gravemente la fauna marina, contaminan el agua y destruyen ecosistemas costeros."
  });
});

app.get('/api/ambiente/basura', (req, res) => {
  res.json({
    titulo: "Contaminación por basura en el mar",
    descripcion: "Millones de toneladas de plástico llegan al océano cada año, dañando especies marinas y afectando la cadena alimenticia."
  });
});

app.get('/api/ambiente/gases', (req, res) => {
  res.json({
    titulo: "Contaminación por gases",
    descripcion: "Las emisiones de gases contaminantes contribuyen al cambio climático, afectando la calidad del aire y la salud humana."
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});