const {encode, decode } = require('./encodeDecode')

//  🚀 4 - Para as funções encode e decode crie os seguintes testes em Jest:

//     4.1 - Teste se encode e decode são funções;
//     4.2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
//     4.3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
//     4.4 - Teste se as demais letras/números não são convertidos para cada caso;
//     4.5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

describe('4° Requisito', () => {
  it('4.1 - Verifica se as funções ENCODE e DECODE existem.', () => {
    expect(typeof encode).toBe('function');
     expect(typeof decode).toBe('function');
  });

  it('4.2 - Verifica se a função ENCODE recebe uma palavra e a codifica substituindo as vogais a, e, i, o, u que existem na palavra pelos numeros 1, 2, 3, 4, 5 respectivamente.', () => {
    expect(encode('amor uva')).toBe('1m4r 5v1');
    expect(encode('peixe')).toBe('p23x2');
    expect(encode('uva')).toBe('5v1');
  });

  it('4.3 - Verifica se a função DECODE recebe uma palavra codificada e a decodifica, subtituindo os numeros 1, 2, 3, 4, 5 pelas vogais a, e, i, o, u respectivamente.', () => {
    expect(decode('1m4r')).toBe('amor');
    expect(decode('p23x2')).toBe('peixe');
    expect(decode('5v1')).toBe('uva');
  });

  it('4.4 - Verifica se as funções recebem as demais letras/números e não são convertidos para cada caso', () => {
    expect(encode('sdfg')).toBe('sdfg');
    expect(encode('fvr')).toBe('fvr');
    expect(decode('667788')).toBe('667788');
    expect(decode('996789')).toBe('996789');
  });


  it('4.5 - Verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
  
    expect(encode('sdfg').length).toBe(4);
    expect(decode('amores').length).toBe(6)
    
  });
});
