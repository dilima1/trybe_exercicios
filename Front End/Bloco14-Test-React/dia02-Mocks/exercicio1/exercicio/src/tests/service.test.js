const service = require('../service/service');

// describe('', () => {});
//  1.2 - Desenvolva os testes para essa função.
//  1.3 - Utilize o mock e defina o retorno padrão como 10.
//  1.4 - Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada. 

describe('1 - Requisito', () => {
  test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
   service.randomNumber = jest.fn().mockReturnValue(10);
 
   expect(service.randomNumber()).toBe(10);
   expect(service.randomNumber).toHaveBeenCalled();
   expect(service.randomNumber).toHaveBeenCalledTimes(1);
 });

})

//  2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.

//     2.1 - Defina o mock da função para a nova funcionalidade da função.
//     2.2 - Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
//     2.3 - Verifique se a aplicação da nova implementação acontece apenas uma vez.

describe('2 - Requisito', () => {
  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  });
})

//  3 - Use a mesma função do primeiro exercício

//     3.1 - Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
//     3.2 - Retorne a multiplicação dos parâmetros.
//     3.4 - Realize os testes que achar necessário.
//     3.5 - Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
//     3.6 - Faça os testes que achar necessário.

describe("3 - Requisito", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
//     3.1 - Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

//     3.2 - Retorne a multiplicação dos parâmetros.
    expect(service.randomNumber(2, 3, 4)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
//     3.5 - Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber.mockImplementation(a => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});


// 4. Faça o mock das funções para com os seguintes casos:

//     4.1 - Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
//     4.2 - Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
//     4.3 - Implemente, na terceira função: ela deve receber três strings e concatená-las.

describe("4 - Requisito", () => {
  //     4.1 - Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const mockFirstFunction = jest.spyOn(service, "firstFunction" ).mockImplementation(a => a.toLowerCase());

    expect(mockFirstFunction("UPPERCASE")).toBe("uppercase");
    expect(service.firstFunction).toHaveBeenCalledTimes(1);
    expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  //     4.2 - Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    const mockSecondFunction = jest.spyOn(service, "secondFunction").mockImplementation(a => a.charAt(a.length - 1));

    expect(mockSecondFunction("letter")).toBe("r");
    expect(service.secondFunction).toHaveBeenCalledTimes(1);
    expect(service.secondFunction).toHaveBeenCalledWith("letter");
  });

  //     4.3 - Implemente, na terceira função: ela deve receber três strings e concatená-las.
  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    const mockThirdFunction = jest.spyOn(service, "thirdFunction").mockImplementation((a, b, c) => a.concat(b, c));

    expect(mockThirdFunction("tr", "y", "be")).toBe("trybe");
    expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    expect(service.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
  
// 4.4 - Faça o teste necessário para garantir que a implementação da função foi restaurado. 
  test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
    service.firstFunction.mockRestore();

    expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
  })
});

//  Mocke a requisição e crie dois testes.

//     O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".
//     O segundo deve interpretar que a requisição falhou e ter como valor "request failed".

// Crie todos os testes que achar necessário


describe("5 - Requisito", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

//     O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success".

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  //     O segundo deve interpretar que a requisição falhou e ter como valor "request failed".

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});






