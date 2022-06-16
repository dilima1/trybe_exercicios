function encode (fraseEncode) {
  // seu código aqui
  let code = fraseEncode.split('');
  let arrayTrans = [];

  for (let index = 0; index < code.length; index += 1) {
    if (code[index] === 'a') {
      arrayTrans.push(1);
    } else if (code[index] === 'e') {
      arrayTrans.push(2);
    } else if (code[index] === 'i') {
      arrayTrans.push(3);
    } else if (code[index] === 'o') {
      arrayTrans.push(4);
    } else if (code[index] === 'u') {
      arrayTrans.push(5);
    } else {
      arrayTrans.push(code[index]);
    }
  }
  const palavraTransforma = arrayTrans.join('');
  return palavraTransforma;
  
}


function decode(franseDecode) {
  // seu código aqui
  let decoode = franseDecode.split('');
  let arraayTrans = [];

  for (let index = 0; index < decoode.length; index += 1) {
    if (decoode[index] === '1') {
      arraayTrans.push('a');
    } else if (decoode[index] === '2') {
      arraayTrans.push('e');
    } else if (decoode[index] === '3') {
      arraayTrans.push('i');
    } else if (decoode[index] === '4') {
      arraayTrans.push('o');
    } else if (decoode[index] === '5') {
      arraayTrans.push('u');
    } else {
      arraayTrans.push(decoode[index]);
    }
  }
  return arraayTrans.join('');
}

module.exports = {encode, decode}