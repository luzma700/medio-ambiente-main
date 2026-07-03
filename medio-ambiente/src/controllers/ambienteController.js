exports.petroleo = (req, res) => {
  res.json({
    titulo: "Contaminación por petróleo en el mar",
    descripcion: "Los derrames de petróleo afectan gravemente la fauna marina, contaminan el agua y destruyen ecosistemas costeros."
  });
};

exports.basura = (req, res) => {
  res.json({
    titulo: "Contaminación por basura en el mar",
    descripcion: "Millones de toneladas de plástico llegan al océano cada año, dañando especies marinas y afectando la cadena alimenticia."
  });
};

exports.gases = (req, res) => {
  res.json({
    titulo: "Contaminación por gases",
    descripcion: "Las emisiones de gases contaminantes contribuyen al cambio climático, afectando la calidad del aire y la salud humana."
  });
};