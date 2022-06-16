function techList(tech, name) {
  // seu código aqui
  let habi = [];
  tech.sort();

  for (let index = 0; index < tech.length; index += 1) {
    habi.push({ tech: tech[index], name: name });
  }

  if (tech.length === 0) {
    habi = 'Vazio!';
  }
  return habi;
}

module.exports = techList;