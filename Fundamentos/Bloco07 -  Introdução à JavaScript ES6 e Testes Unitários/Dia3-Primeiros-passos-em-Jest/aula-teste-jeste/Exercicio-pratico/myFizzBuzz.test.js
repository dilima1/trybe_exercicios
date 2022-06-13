const myFizzBuzz = require('./myFizzBuzz')

//  🚀 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

//     3.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
//     3.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
//     3.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
//     3.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
//     3.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('3 - Test Function myFizzBuzz', () => {
  
  it('3.1 - Se NUM for divisivel por 3 e 5 então deverá retornar FIZZBUZZ.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  });

  it('3.2 - Se NUM for divisivel por 3 então deverá retornar FIZZ.', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  });

  it('3.3 - Se NUM for divisivel por 5 então deverá retornar BUZZ.', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  });

  it('3.4 - Se NUM não for divisivel por 3 e nem  por 5 então deverá retornar ele mesmo.', () => {
    expect(myFizzBuzz(7)).toBe(7)
  });

  it('3.5 - Se NUM não for um numero, retorne false.', () => {
    expect(myFizzBuzz("a")).toBe(false)
  });




});
