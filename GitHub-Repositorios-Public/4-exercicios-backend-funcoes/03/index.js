print = (arg) => console.log(arg);

/* a) Declare uma função de nome `imprimirResumoDoCarrinho` que tenha 
apenas um parâmetro chamado `carrinho`.
*/

// function imprimirResumoDoCarrinho(carrinho) {}

/*
b) Implemente a função imprimirResumoDoCarrinho de modo que, ao receber um objeto como este 
como parâmetro, o resultado seja o seguinte.

Cliente: Guido Bernal
Total de itens: 5 itens
Total a pagar: R$ 190,00

Para testar sua implementação, chame a função imprimirResumoDoCarrinho passando o objeto carrinho exemplificado acimam como argumento.
*/

// const carrinhoA = {
//   nomeDoCliente: "Guido Bernal",
//   produtos: [
//     {
//       id: 1,
//       nome: "Camisa",
//       qtd: 3,
//       precoUnit: 3000,
//     },
//     {
//       id: 2,
//       nome: "Bermuda",
//       qtd: 2,
//       precoUnit: 5000,
//     },
//   ],
// };

// function imprimirResumoDoCarrinho(carrinho) {
//   let totalRs = 0;
//   let totalItens = 0;

//   for (let cadaProduto of carrinho.produtos) {
//     totalRs += cadaProduto.qtd * cadaProduto.precoUnit;
//     totalItens += 1;
//   }

//   print(`\nCliente: ${carrinho.nomeDoCliente}
// Total de itens: ${totalItens}
// Total a pagar: R$ ${(totalRs / 100).toFixed(2)}\n`);
// }

// imprimirResumoDoCarrinho(carrinhoA);

/*
c) Modifique a questão anterior para que a função imprimirResumoDoCarrinho seja um 
método do objeto carrinho (sendo assim, cabe mudar o nome do método para apenas imprimirResumo) 
ao invés de uma função isolada.
*/

// const carrinhoC = {
//   nomeDoCliente: "Jobson Medeiros",
//   produtos: [
//     {
//       id: 1,
//       nome: "Biscoito Treloso",
//       qtd: 2,
//       precoUnit: 200,
//     },

//     {
//       id: 2,
//       nome: "Açaí Cremoso",
//       qtd: 1,
//       precoUnit: 1800,
//     },

//     {
//       id: 3,
//       nome: "Refrigerante Sprite",
//       qtd: 1,
//       precoUnit: 3500,
//     },
//   ],

//   imprimirResumo: function (carrinho) {
//     let totalRs = 0;
//     let totalItens = 0;

//     for (let cadaProduto of this.produtos) {
//       totalRs += cadaProduto.qtd * cadaProduto.precoUnit;
//       totalItens += 1;
//     }

//     print(`\nCliente: ${this.nomeDoCliente}
// Total de itens: ${totalItens}
// Total a pagar: R$ ${(totalRs / 100).toFixed(2)}\n`);
//   },
// };

// carrinhoC.imprimirResumo()

/*
d) Declare uma nova função isolada chamada addProdutoAoCarrinho que 
tenha dois argumentos: carrinho e produto.

function addProdutoAoCarrinho(produto, carrinho){ }

*/

/*
e) Implemente a função addProdutoAoCarrinho de modo que o 
produto passado com argumento seja adicionado ao array 
de produtos da compra.
Lembre-se que, antes de simplesmente adicionar o item ao array, é necessário 
verificar se já existe um item igual no carrinho. Caso exista, basta incrementar 
a propriedade qtd do item adequadamente. Caso não exista, aí sim é necessário 
adicionar um novo item ao array. Use o id dos produtos para fazer esta comparação.
*/

// const carrinhoE = {
//   nomeDoCliente: "Jobson Medeiros",
//   produtos: [
//     {
//       id: 1,
//       nome: "Biscoito Treloso",
//       qtd: 1,
//       precoUnit: 200,
//     },

//     {
//       id: 2,
//       nome: "Açaí Cremoso",
//       qtd: 1,
//       precoUnit: 1800,
//     },

//     {
//       id: 3,
//       nome: "Refrigerante Sprite",
//       qtd: 1,
//       precoUnit: 4500,
//     },
//   ],

//   imprimirResumo: function () {
//     let totalRs = 0;
//     let totalItens = 0;

//     for (let cadaProduto of this.produtos) {
//       totalRs += cadaProduto.qtd * cadaProduto.precoUnit;
//       totalItens += cadaProduto.qtd;
//     }

//     print(`\n
//     -------------------------------------------
//     Cliente: ${this.nomeDoCliente}
//     Total de itens: ${totalItens}
//     Total a pagar: R$ ${(totalRs / 100).toFixed(2)}
//     -------------------------------------------
//     \n`);
//   },
// };

// function addProdutoAoCarrinho(produto, carrinho) {

//     if (checarItemPorId(produto.id, carrinho)) {
//       // Produto está no carrinho
//       print(`Produto "${produto.nome}" já está no carrinho.`)
//       carrinho.produtos[produto.id - 1].qtd += produto.qtd
//       print(carrinho.produtos)

//     } else {
//       print(`Produto "${produto.nome}" não está no carrinho.`)
//       carrinho.produtos.push(produto)
//       print(carrinho.produtos)
//     }

// }

// function checarItemPorId(id, carrinho) {
//   for (let cadaItem of carrinho.produtos) {
//     if (cadaItem.id == id) return true;
//   }
// }

// print(carrinhoE.produtos)

// carrinhoE.imprimirResumo()

// addProdutoAoCarrinho(
//   {
//     id: 2,
//     nome: "Açaí Cremoso",
//     qtd: 1,
//     precoUnit: 1800,
//   },
//   carrinhoE
// );

// addProdutoAoCarrinho(
//   {
//     id: 4,
//     nome: "Água Mineral",
//     qtd: 1,
//     precoUnit: 2500,
//   },
//   carrinhoE
// );

// print(carrinhoE)
// print(carrinhoE.produtos)
// carrinhoE.imprimirResumo()

/*
f) Modifique a questão anterior para que a função addProdutoAoCarrinho 
seja um método do objeto carrinho (sendo assim, cabe mudar o nome do método 
para apenas addProduto. Faça os mesmos testes anteriores (adaptando a chamada, 
  que não precisará mais do argumento carrinho) e o resultado obtido deve ser o mesmo.
*/

// const carrinhoF = {
//   nomeDoCliente: "Jobson Medeiros",
//   produtos: [
//     {
//       id: 1,
//       nome: "Biscoito Treloso",
//       qtd: 1,
//       precoUnit: 200,
//     },

//     {
//       id: 2,
//       nome: "Açaí Cremoso",
//       qtd: 1,
//       precoUnit: 1800,
//     },

//     {
//       id: 3,
//       nome: "Refrigerante Sprite",
//       qtd: 1,
//       precoUnit: 4500,
//     },
//   ],

//   imprimirResumo: function () {
//     let totalRs = 0;
//     let totalItens = 0;

//     for (let cadaProduto of this.produtos) {
//       totalRs += cadaProduto.qtd * cadaProduto.precoUnit;
//       totalItens += cadaProduto.qtd;
//     }

//     print(`\n
//     -------------------------------------------
//     Cliente: ${this.nomeDoCliente}
//     Total de itens: ${totalItens}
//     Total a pagar: R$ ${(totalRs / 100).toFixed(2)}
//     -------------------------------------------
//     \n`);
//   },
//   addProduto: function (produto) {
//     if (checarItemPorId(produto.id, this)) {
//       // Produto está no carrinho
//       print(`Produto "${produto.nome}" já está no carrinho.`);
//       this.produtos[produto.id - 1].qtd += produto.qtd;
//       print(this.produtos);
//     } else {
//       print(`Produto "${produto.nome}" não está no carrinho.`);
//       this.produtos.push(produto);
//       print(this.produtos);
//     }
//   },
// };

// function checarItemPorId(id, carrinho) {
//   for (let cadaItem of carrinho.produtos) {
//     if (cadaItem.id == id) return true;
//   }
// }

// print(carrinhoF);
// carrinhoF.addProduto({
//   id: 2,
//   nome: "Açaí Cremoso",
//   qtd: 1,
//   precoUnit: 1800,
// });

// print(carrinhoF);
// carrinhoF.addProduto({
//   id: 4,
//   nome: "Água Mineral",
//   qtd: 1,
//   precoUnit: 2500,
// });
// print(carrinhoF);

/*
g) Declare um novo método para o objeto carrinho chamado imprimirDetalhes
*/
// const carrinhoG = {
//   nomeDoCliente: "Jobson Medeiros",
//   produtos: [
//     {
//       id: 1,
//       nome: "Camisa",
//       qtd: 3,
//       precoUnit: 3000,
//     },
//     {
//       id: 2,
//       nome: "Bermuda",
//       qtd: 2,
//       precoUnit: 5000,
//     },
//   ],
//   imprimirResumo: function () {
//     let totalRs = 0;
//     let totalItens = 0;

//     for (let cadaProduto of this.produtos) {
//       totalRs += cadaProduto.qtd * cadaProduto.precoUnit;
//       totalItens += cadaProduto.qtd;
//     }

//     print(`\n
//     -------------------------------------------
//     Cliente: ${this.nomeDoCliente}
//     Total de itens: ${totalItens}
//     Total a pagar: R$ ${(totalRs / 100).toFixed(2)}
//     -------------------------------------------
//     \n`);
//   },
//   addProduto: function (produto) {
//     if (checarItemPorId(produto.id, this)) {
//       // Produto está no carrinho
//       print(`Produto "${produto.nome}" já está no carrinho.`);
//       this.produtos[produto.id - 1].qtd += produto.qtd;
//       print(this.produtos);
//     } else {
//       print(`Produto "${produto.nome}" não está no carrinho.`);
//       this.produtos.push(produto);
//       print(this.produtos);
//     }
//   },
//   imprimirDetalhes: function () {
//     for(let i = 0; i < this.produtos.length; i++){
//       //Imprimir: Item 1 - Bermuda - 2 und - R$ 100,00
//       print(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und. - R$ ${((this.produtos[i].qtd * this.produtos[i].precoUnit)/100).toFixed(2)}`)
//     }

//       totalItens = 0
//       totalAPagar = 0

//     for(let i = 0; i < this.produtos.length; i++){
//       // Total de itens: 5 itens
//       // Total a pagar: R$ 190,00
//       totalItens += this.produtos[i].qtd
//       totalAPagar += this.produtos[i].qtd * this.produtos[i].precoUnit
//       }

//       print("\nTotal de itens: " + totalItens)
//       print("Total a pagar: R$ " + (totalAPagar/100).toFixed(2))

//   },
// };

// carrinhoG.imprimirDetalhes()

/*
h) Repare que, nas questão anterior, você fez uma função em que parte da lógica 
é muito parecida com o do método imprimirResumo, pois ambas precisam calcular o 
total de itens e calcular o total a pagar. Se algum dia o formato dos objetos 
forem modificados, de modo que você precise modificar a lógica do cálculo desses 
totais, você terá que lembrar de modificar isso em ambas as funções.
Para corrigir isso, vamos fazer dois novos métodos calcularTotalDeItens e 
calcularTotalAPagar, que devem retornar um número inteiro (lembre-se que você 
  pode acessar os dados do carrinho através da palavra reservada this).

Depois, altere os métodos imprimirResumo e imprimirDetalhes para que elas chamem 
essas duas novas funções.
*/
// const carrinhoH = {
//   nomeDoCliente: "Jobson Medeiros",
//   produtos: [
//     {
//       id: 1,
//       nome: "Camisa",
//       qtd: 3,
//       precoUnit: 3000,
//     },
//     {
//       id: 2,
//       nome: "Bermuda",
//       qtd: 2,
//       precoUnit: 5000,
//     },
//   ],
//   imprimirResumo: function () {
//     print(`\n
//     -------------------------------------------
//     Cliente: ${this.nomeDoCliente}
//     Total de itens: ${this.calcularTotalDeItens()}
//     Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}
//     -------------------------------------------
//     \n`);
//   },
//   addProduto: function (produto) {
//     if (checarItemPorId(produto.id, this)) {
//       // Produto está no carrinho
//       print(`Produto "${produto.nome}" já está no carrinho.`);
//       this.produtos[produto.id - 1].qtd += produto.qtd;
//       print(this.produtos);
//     } else {
//       print(`Produto "${produto.nome}" não está no carrinho.`);
//       this.produtos.push(produto);
//       print(this.produtos);
//     }
//   },
//   imprimirDetalhes: function () {
//     for (let i = 0; i < this.produtos.length; i++) {
//       //Imprimir: Item 1 - Bermuda - 2 und - R$ 100,00
//       print(
//         `Item ${i + 1} - ${this.produtos[i].nome} - ${
//           this.produtos[i].qtd
//         } und. - R$ ${(
//           (this.produtos[i].qtd * this.produtos[i].precoUnit) /
//           100
//         ).toFixed(2)}`
//       );
//     }

//     print("\nTotal de itens: " + this.calcularTotalDeItens());
//     print("Total a pagar: R$ " + (this.calcularTotalAPagar() / 100).toFixed(2));
//   },
//   calcularTotalDeItens: function () {
//     let totalItens = 0;
//     for (let i = 0; i < this.produtos.length; i++) {
//       totalItens += this.produtos[i].qtd;
//     }
//     return totalItens;
//   },
//   calcularTotalAPagar: function () {
//     let totalAPagar = 0;
//     for (let i = 0; i < this.produtos.length; i++) {
//       totalAPagar += this.produtos[i].qtd * this.produtos[i].precoUnit;
//     }
//     return totalAPagar;
//   },
// };

// carrinhoH.imprimirDetalhes();
// carrinhoH.imprimirResumo();

/*
i) Declare e implemente um novo método chamado calcularDesconto, 
sem nenhum parâmetro.

Este método deverá retornar um valor inteiro desconto, que é o 
valor de desconto que deve ser aplicado neste carrinho.
Para calcular o valor do desconto, utiliza-se a seguinte lógica:
Existem dois descontos possíveis, não cumulativos.

O primeiro é um desconto em que, para compras acima de 4 itens, 
o item mais barato sai de graça.

O segundo é um desconto de 10% para compras acima de 100 reais.

Sempre no máximo um deles será aplicado - o que for mais vantajoso para o cliente.
Para o exemplo da letra B, o desconto deverá ser de R$ 30,00.
Para o exemplo da letra E, com 8 itens, o desconto deverá ser de R$ 44,00.
*/

const carrinhoI = {
  nomeDoCliente: "Jobson Medeiros",

  produtos: [
    {
      id: 2,
      nome: "Bermuda",
      qtd: 3,
      precoUnit: 5000
  },
  {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
],
calcularItemDeMenorValor: function () {
    
  let menorPreco = this.produtos[0].precoUnit;

  for (let i = 0; i < this.produtos.length; i++) {
    if (this.produtos[i].precoUnit < menorPreco)
      menorPreco = listaDeCompras[i].precoUnit;
  }
  return menorPreco;
},
  calcularDesconto: function () {
    let desconto1 = 0.00;
    let desconto2 = 0.00;

    if (this.verificarSeMaisDeQuatroItens()) {
      desconto1 = this.calcularItemDeMenorValor()
      print("desconto1: " + desconto1)
    }

    if (this.calcularValorAPagar() > 10000) {
      desconto2 =  0.1 * this.calcularValorAPagar(); // 10/100 = 10%
      print("desconto2: " + desconto2)
    }

    if(desconto1 > desconto2) {
      return desconto1
    } else {
      return desconto2
    } 
  },
  calcularPercentualDeDesconto: function () {
    return (
      (100.0 / this.calcularValorAPagar()) *
      this.calcularItemDeMenorValor()
    );
  },
  imprimirResumo: function () {
    print(`\n
    -------------------------------------------
    Cliente: ${this.nomeDoCliente}
    Total de itens: ${this.verificarSeMaisDeQuatroItens()} 
    Total a pagar: R$ ${((this.calcularValorAPagar() - this.calcularDesconto())/ 100).toFixed(2)}
    -------------------------------------------
    \n`);
  },
  addProduto: function (produto) {
    if (checarItemPorId(produto.id, this)) {
      // Produto está no carrinho
      print(`Produto "${produto.nome}" já está no carrinho.`);
      this.produtos[produto.id - 1].qtd += produto.qtd;
      print(this.produtos);
    } else {
      print(`Produto "${produto.nome}" não está no carrinho.`);
      this.produtos.push(produto);
      print(this.produtos);
    }
  },
  imprimirDetalhes: function () {
    for (let i = 0; i < this.produtos.length; i++) {
      //Imprimir: Item 1 - Bermuda - 2 und - R$ 100,00
      print(
        `Item ${i + 1} - ${this.produtos[i].nome} - ${
          this.produtos[i].qtd
        } und. - R$ ${(
          (this.produtos[i].qtd * this.produtos[i].precoUnit) /
          100
        ).toFixed(2)}`
      );
    }

    print("\nTotal de itens: " + this.verificarSeMaisDeQuatroItens());
    print("Total a pagar: R$ " + (this.calcularValorAPagar() / 100).toFixed(2));
  },
  verificarSeMaisDeQuatroItens: function () {

    let totalDeItens = 0

    for (let i = 0; i < this.produtos.length; i++) {
      totalDeItens += this.produtos[i].qtd
    }

    for (let i = 0; i < this.produtos.length; i++) {

      if (totalDeItens > 4) {
        
        return true
      } else return false;

    }
    
  },
  calcularValorAPagar: function () {
    let totalAPagar = 0;
    for (let i = 0; i < this.produtos.length; i++) {
      totalAPagar += this.produtos[i].qtd * this.produtos[i].precoUnit;
    }
    return totalAPagar
  },
  calcularTotalAPagar: function(){
    return (this.calcularValorAPagar() - this.calcularDesconto())

  },


};

print("Total: " + carrinhoI.calcularValorAPagar());
print(carrinhoI.calcularTotalAPagar());
