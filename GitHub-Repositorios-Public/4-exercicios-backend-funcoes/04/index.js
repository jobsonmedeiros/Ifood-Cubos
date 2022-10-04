print = (arg) => console.log(arg);

/*a) Crie um objeto contaBancaria. Uma conta bancária será sempre um objeto
com o seguinte formato:
*/
// const contaBancariaA = {
//   nome: "Maria",
//   saldo: 0,
//   historicos: [],
// };

/*
Sabendo que as transações básicas de uma conta bancária são depositar, sacar
e emitir extrato, faça o seguinte:

b) Declare um método depositar no objeto contaBancaria que tenha um 
argumento valor.
*/

// const contaBancariaB = {
//   nome: "Maria",
//   saldo: 0,
//   historicos: [],
//   depositar: function (valor) {},
// };

/*
c) Implemente o método depositar de modo que o valor passado como argumento 
seja um número inteiro que representará o valor a ser depositado em 
centávos. Esse método precisa realizar as seguintes operações:

Somar o valor informado como argumento ao saldo atual da conta;

Adicionar um objeto ao array historicos. Esse objeto precisa ter o seguinte 
formato:

{
    tipo: "Depósito",
    valor: 10000, //aqui será o valor informado no argumento do 
    método depositar
}

Retornar a seguinte mensagem: 
Deposito de R$100 realizado para o cliente: Maria.
*/
// const contaBancariaC = {
//   nome: "Maria",
//   saldo: 0,
//   historicos: [],
//   depositar: function (valor) {
//     if (valor > 0) {
//       this.saldo += valor;
//       this.historicos.push({
//         tipo: "Depósito",
//         valor: valor,

//       });
//     }
//     print(`Depósito de R$ ${((valor/100).toFixed(2))} realizado para o(a) cliente: ${this.nome}.`)
//   },
// };

// contaBancariaC.depositar(500)
// print(contaBancariaC.historicos)

/*
d) Declare um método sacar no objeto contaBancaria que tenha um argumento 
valor.
*/
// const contaBancariaD = {
//   nome: "Maria",
//   saldo: 0,
//   historicos: [],
//   depositar: function (valor) {
//     if (valor > 0) {
//       this.saldo += valor;
//       this.historicos.push({
//         tipo: "Depósito",
//         valor: valor,

//       });
//     }
//     print(`Depósito de R$ ${((valor/100).toFixed(2))} realizado para o(a) cliente: ${this.nome}.`)
//   },
//   sacar: function(valor){}
// };

/*
e) Implemente o método sacar de modo que o valor passado como argumento 
seja um número inteiro que representará o valor a ser sacado em centávos. 
Esse método precisa realizar as seguintes operações:

Verificar se o valor é maior que o saldo atual da conta e caso a condição 
for verdadeira retornar a seguinmte mensagem: Saldo insuficiente para o 
saque de: Maria. Lembrando que, essa condição sendo verdadeira, as demais 
operações não poderão serem executadas;

Subtrair o valor informado como argumento ao saldo atual da conta caso o 
valor seja menor que o saldo atual da conta;

Adicionar um objeto ao array historicos. Esse objeto precisa ter o seguinte 
formato:

{
    tipo: "Saque",
    valor: 5000, //aqui será o valor informado no argumento do método sacar
}

Retornar a seguinte mensagem: Saque de R$50 realizado para o cliente: Maria.
*/
// const contaBancariaE = {
//   nome: "Maria",
//   saldo: 0,
//   historicos: [],
//   depositar: function (valor) {
//     if (valor > 0) {
//       this.saldo += valor;
//       this.historicos.push({
//         tipo: "Depósito",
//         valor: valor,
//       });
//     }
//     print(
//       `Depósito de R$ ${(valor / 100).toFixed(
//         2
//       )} realizado para o(a) cliente: ${this.nome}.`
//     );
//   },

//   sacar: function (valor) {
//     if (valor > this.saldo) {
//       print(`Saldo insuficiente para o saque de: ${this.nome}.`);
//     } else {
//       this.saldo -= this.valor;
//       this.historicos.push({
//         tipo: "Saque",
//         valor: valor,
//       });
//     }
//     print(`Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`)
//   },
// };

// contaBancariaE.depositar(50000);
// contaBancariaE.sacar(100);
// print(contaBancariaE.historicos);

/*
f) Declare um método extrato no objeto contaBancaria. Esse método não 
receberá argumento.
*/
// const contaBancariaF = {
//   nome: "Maria",
//   saldo: 0,
//   historicos: [],
//   depositar: function (valor) {
//     if (valor > 0) {
//       this.saldo += valor;
//       this.historicos.push({
//         tipo: "Depósito",
//         valor: valor,
//       });
//     }
//     print(
//       `Depósito de R$ ${(valor / 100).toFixed(
//         2
//       )} realizado para o(a) cliente: ${this.nome}.`
//     );
//   },

//   sacar: function (valor) {
//     if (valor > this.saldo) {
//       print(`Saldo insuficiente para o saque de: ${this.nome}.`);
//     } else {
//       this.saldo -= this.valor;
//       this.historicos.push({
//         tipo: "Saque",
//         valor: valor,
//       });
//     }
//     print(`Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`)
//   },
//   extrato: function (){}
// };

/*
g) Implemente o método extrato de modo que o retorno desse método seja o 
seguinte:

Extrato de Maria - Saldo: R$50
Histórico:
Depósito de $100
Saque de $50
*/

const contaBancariaG = {
  nome: "Maria",
  saldo: 0.0,
  historicos: [],

  depositar: function (valor) {
    if (valor > 0.0) {
      this.saldo += valor;
      this.historicos.push({
        tipo: "Depósito",
        valor: valor,
      });
      print(
        `Depósito de R$ ${(valor / 100).toFixed(
          2
        )} realizado para o(a) cliente: ${this.nome}.`
      );
    } else {
      print(`Depósito não pôde ser realizdo.`);
    }
  },

  sacar: function (valor) {
    if (valor > this.saldo && valor > 0.0) {
      print(`Saldo insuficiente para o saque de: ${this.nome}.`);
    } else {
      this.saldo -= valor;
      this.historicos.push({
        tipo: "Saque",
        valor: valor,
      });
      print(
        `Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${
          this.nome
        }.`
      );
    }
  },

  extrato: function () {
    print(`--------------------------------------
  Extrato de ${this.nome} -- Saldo: R$${(this.saldo/100).toFixed(2)}
--------------------------------------

  Histórico:
        `)        
        for(let i = 0; i < this.historicos.length; i++){
  print(`--
  ${this.historicos[i].tipo} de R$${(this.historicos[i].valor/100).toFixed(2)}
----------------------`)
        }
        print(`---------------------------------------
  Poupe conosco, invista seu dindim ;D
---------------------------------------`)
  },
};

/*
h) Para testar sua implementação faça as seguintes chamadas:
*/
contaBancariaG.depositar(10000);
contaBancariaG.sacar(50000);
contaBancariaG.sacar(5000);
contaBancariaG.extrato();

