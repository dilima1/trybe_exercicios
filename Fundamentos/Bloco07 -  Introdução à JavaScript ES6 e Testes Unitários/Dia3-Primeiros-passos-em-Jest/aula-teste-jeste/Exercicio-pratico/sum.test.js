const sum = require('./sum');

//  🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b

//     Teste se o retorno de sum(4, 5) é 9
//     Teste se o retorno de sum(0, 0) é 0
//     Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
//     Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")


describe('1° Requisito', () => {

  it('1.1 - adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('1.2 - adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('1.3 - adds 4 + "5" to equal error', () => {
    expect(() => sum()).toThrow(Error);
  });

  it('1.4 - adds 4 + "5" to equal parameters must be numbers', () => {
    expect(() => sum()).toThrow('parameters must be numbers');
  });

});