// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

//     Adição (a + b)
//     Subtração (a - b)
//     Multiplicação (a * b)
//     Divisão (a / b)
//     Módulo (a % b)

const a = 10;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const numero1 = 15;
const numero2 = 20;

if (numero1 > numero2) {
  console.log("O número " + numero1 + " é maior que o número " + numero2);
} else {
  console.log("O número " + numero2 + " é maior que o número " + numero1);
}

//     3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const number1 = 10;
const number2 = 25;
const number3 = 50;

if (number1 > number2 && number1 > number3) {
  console.log(
    "O número " +
      number1 +
      " é maior que o número " +
      number2 +
      " e maior que o numero " +
      number3
  );
} else if (number2 > number1 && number2 > number3) {
  console.log(
    "O número " +
      number2 +
      " é maior que o número " +
      number1 +
      " e maior que o numero " +
      number3
  );
} else {
  console.log(
    "O número " +
      number3 +
      " é maior que o número " +
      number1 +
      " e maior que o numero " +
      number2
  );
}

//     4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const temp = 15;

if (temp > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

//     5. 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//     Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//     Um ângulo será considerado inválido se não tiver um valor positivo.

const angulo1 = 50;
const angulo2 = 60;
const angulo3 = -60;
const soma = angulo1 + angulo2 + angulo3;

if (soma === 180) {
  console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Angulo invalido, favor digitar novamente.");
} else {
  console.log(false);
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Peão";
let result = peca.toLowerCase();

if (result === "peão") {
  console.log("Movem somente para frente");
} else if (result === "bispo") {
  console.log("Bispo - Move em uma linha reta diagonalmente no tabuleiro.");
} else if (result === "torre") {
  console.log(
    "Torre - Move move em linha reta horizontalmente e verticalmente pelo número de casas não ocupada."
  );
} else if (result === "cavalo") {
  console.log(
    "Cavalo - É a única peça do tabuleiro que pode pular sobre outras peças, o movimento do cavalo forma um “L” "
  );
} else if (result === "rainha") {
  console.log(
    "Rainha - Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente."
  );
} else if (result === "reo") {
  console.log("Rei - Pode mover para qualquer casa adjacente");
} else {
  console.log(
    "Peça não encontrada, você digitou uma peça que não faz parte do tabuleiro."
  );
}

//     7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

//     Porcentagem >= 90 -> A
//     Porcentagem >= 80 -> B
//     Porcentagem >= 70 -> C
//     Porcentagem >= 60 -> D
//     Porcentagem >= 50 -> E
//     Porcentagem < 50 -> F

//     O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 65;

if (nota >= 90 && nota <= 100) {
  console.log("Sua nota foi A");
} else if (nota > 100) {
  console.log("Nota não encontra, procure a diretoria urgente!!");
} else if (nota >= 80) {
  console.log("Sua nota foi B");
} else if (nota >= 70) {
  console.log("Sua nota foi C");
} else if (nota >= 60) {
  console.log("Sua nota foi D");
} else if (nota >= 50) {
  console.log("Sua nota foi E");
} else if (nota < 50 && nota >= 0) {
  console.log("Sua nota foi F");
} else {
  console.log("Nota não encontra, procure a diretoria urgente!!");
}

//     8. 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

//     Bonus: use somente um if.

const num1 = 25;
const num2 = 31;
const num3 = 30;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//     9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

//     Bonus: use somente um if.

const numb1 = 10;
const numb2 = 32;
const numb3 = 35;

if (numb1 % 2 !== 0 || numb2 % 2 !== 0 || numb3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

//     10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

//     Atente que, sobre o custo do produto, incide um imposto de 20%.
//     Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//     O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//         valorCustoTotal = valorCusto + impostoSobreOCusto
//         lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custoProduto = 1000;
const valorVenda = -100;

const valorCustoTotal = custoProduto * 0.2 + custoProduto;
const lucro = valorCustoTotal - valorVenda;

if (custoProduto > 0 && valorVenda > 0) {
  console.log(lucro * 1000);
} else {
  console.log("Verifiquem os valores de entrada.");
}

//     11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

//     A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//         INSS (Instituto Nacional do Seguro Social)
//             Salário bruto até R$ 1.556,94: alíquota de 8%
//             Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//             Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//             Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//         IR (Imposto de Renda)
//             Até R$ 1.903,98: isento de imposto de renda
//             De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//             De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//             De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//             Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

//     O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//     Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//     Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
//         R$ 2.670,00: salário com INSS já deduzido;
//         7.5%: alíquota de imposto de renda;
//         R$ 142,80 parcela a se deduzir do imposto.
//     Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
//     O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

const salarioBruto = 3000;
var salarioBase = "";
var valorIR = "";

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
  valorIR = salarioBase + 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  valorIR = salarioBase * 0.075 - 142.8;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  valorIR = salarioBase * 0.15 - 354.8;
} else if (salarioBase >= 3751.08 && salarioBase <= 4664.68) {
  valorIR = salarioBase * 0.225 - 636.13;
} else if (salarioBase > 4664.68) {
  valorIR = salarioBase * 0.275 - 869.36;
}

if (salarioBase < 1903.98) {
  console.log("Você ira receber liquido o valor de " + salarioBase);
} else {
  console.log("Você ira receber liquido o valor de " + (salarioBase - valorIR));
}
