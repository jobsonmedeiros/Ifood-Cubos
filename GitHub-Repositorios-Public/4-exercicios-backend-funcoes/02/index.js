print = (arg) => console.log(arg);

/*  a) Criar o objeto carro com apenas as duas propriedades (neste primeiro passo não é 
    necessário criar os métodos):

    ligado (boolean) : que de deverá ser inicializada com valor false (desligado).
    velocidade (number) : que deverá ser inicializada com valor 0 (zero).
*/
const carroA = {
  ligado: false,
  velocidade: 0,
};
// print("ligado: " + carroA.ligado)
// print("velocidade: " + carroA.velocidade)

/*
    b) Acrescentar neste objeto carro um membro chamado ligar que possuirá como valor uma 
    função que implementará a seguinte lógica:

    Verificar se o carro está ligado ou não. 
    - Se o carro já estiver ligado, deverá imprimir 
    uma mensagem no console dizendo: Este carro já está ligado. 
    - Se não (se o carro não estiver 
    ligado), deverá alterar a propriedade ligado para true.
*/

const carroB = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      print("Este carro já está ligado.");
    } else {
      this.ligado = true;
    }
  },
};

// carroB.ligar()
// print(carroB.ligado)

/*
c) Acrescentar neste objeto carro um membro chamado desligar que possuirá como valor uma 
função que implementará a seguinte lógica:

Verificar se o carro está ligado ou não. - Se o carro já estiver desligado, deverá imprimir 
uma mensagem no console dizendo: Este carro já está desligado. - Se não (se o carro estiver 
ligado), deverá: - alterar a propriedade ligado para false. - atribuir valor 0 (zero) à 
propriedade velocidade.
*/

const carroC = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      print("Este carro já está ligado.");
    } else {
      this.ligado = true;
    }
  },
  desligar: function () {
    if (!this.ligado) {
      print("Este carro já está desligado.");
    } else {
      ligado = false;
      this.velocidade = 0;
    }
  },
};

// print (carroC)
// print(carroC.ligado)
// carroC.desligar()

/*
d) Acrescentar neste objeto carro um membro chamado acelerar que possuirá como valor uma 
função que implementará a seguinte lógica:

Verificar se o carro está ligado ou não. - Se o carro não estiver ligado, deverá imprimir 
uma mensagem no console dizendo: Não é possível acelerar um carro desligado. 
- Se não (se o carro estiver ligado), deverá: 
- aumentar em 10 o valor da propriedade velocidade
*/

const carroD = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      print("Este carro já está ligado.");
    } else {
      this.ligado = true;
    }
  },
  desligar: function () {
    if (!this.ligado) {
      print("Este carro já está desligado.");
    } else {
      ligado = false;
      this.velocidade = 0;
    }
  },
  acelerar: function () {
    if (!this.ligado) {
      print("Não é possível acelerar um carro desligado.");
    } else {
      this.velocidade += 10;
    }
  },
};

/*
  e) Acrescentar neste objeto carro um membro chamado desacelerar que possuirá como valor 
  uma função que implementará a seguinte lógica:

Verificar se o carro está ligado ou não. - Se o carro não estiver ligado, deverá imprimir 
uma mensagem no console dizendo: Não é possível desacelerar um carro desligado. 
- Se não (se o carro estiver ligado), deverá: - diminuir 10 do valor da propriedade velocidade.
*/

const carroE = {
  ligado: false,
  velocidade: 0,
  ligar: function () {
    if (this.ligado) {
      print("Este carro já está ligado.");
    } else {
      this.ligado = true;
    }
  },
  desligar: function () {
    if (!this.ligado) {
      print("Este carro já está desligado.");
    } else {
      ligado = false;
      this.velocidade = 0;
    }
  },
  acelerar: function () {
    if (!this.ligado) {
      print("Não é possível acelerar um carro desligado.");
    } else {
      this.velocidade += 10;
    }
  },
  desacelerar: function () {
    if (!this.ligado) {
      print("Não é possível desacelerar um carro desligado.");
    } else {
      this.velocidade -= 10;
    }
  },
};

/*
  f) Em cada um dos 4 métodos (ligar, desligar, acelerar, desacelerar), quando e apenas 
  quando alguma propriedade for alterada, imprimir no console uma mensagem mostrando o 
  status atual do carro. Esta mensagem deverá seguir os seguinte formato: 
  "Carro [ligado/desligado]. Velocidade: [velocidade].". 
  Com isto, todos os métodos quando alterarem alguma das propriedades, imprimirá o status 
  atual do carro. Exemplos de mensagens

Carro desligado. Velocidade: 0.
Carro ligado. Velocidade: 0.
Carro ligado. Velocidade: 30.
*/

const carroF = {
  ligado: false,
  velocidade: 0,

  ligar: function () {
    if (this.ligado) {
      print("Este carro já está ligado.\n");
    } else {
      print("Ligando...");
      this.ligado = true;
      this.status();
    }
  },

  desligar: function () {
    if (!this.ligado) {
      print("Este carro já está desligado.\n");
    } else {
      print("Desligando...");
      this.ligado = false;
      this.velocidade = 0;
      this.status();
    }
  },

  acelerar: function () {
    if (!this.ligado) {
      print("Não é possível acelerar um carro desligado.\n");
    } else {
      print("Acelerando...");
      this.velocidade += 10;
      this.status();
    }
  },

  desacelerar: function () {
    if (!this.ligado) {
      print("Não é possível desacelerar um carro desligado.\n");
    } else {
      print("Desacelerando...");
      this.velocidade -= 10;
      this.status();
    }
  },

  status: function () {
    print(
      `Carro ${this.ligado ? "ligado." : "desligado."} Velocidade ${
        this.velocidade
      } Km/h.\n`
    );
  },
};

/*
g) Após construir todo o objeto com suas propriedades e métodos, deveremos executar 
os métodos na seguinte ordem:
*/

// // 1. Desligar o carro
// carroF.desligar();

// // 2. Ligar o carro
// carroF.ligar();

// // 3. Ligar o carro
// carroF.ligar();

// // 4. Acelerar o carro
// carroF.acelerar();

// // 5. Acelerar o carro
// carroF.acelerar();

// // 6. Desacelerar o carro
// carroF.desacelerar();

// // 7. Desligar o carro
// carroF.desligar();

// // 8. Acelerar o carro
// carroF.acelerar();

// // 9. Desacelerar o carro
// carroF.desacelerar();

/* EXTRAS */

// --------------- EXTRA A ---------------
// Tente revisar os métodos para aplicar a técnica DRY (Don't Repeat Yourself) e
// excluir (quando possível) toda repetição de código igual ou muito semelhante.
// OK. JÁ FOI INICIALMENTE FEITO SEGUINDO O MÉTODO DRY

// --------------- EXTRA B ---------------
// Faça uma segunda validação para permitir que o carro seja desligado **apenas**
// quando tiver em velocidade zero.

const carroExtraB = {
  ligado: false,
  velocidade: 0,

  ligar: function () {
    if (this.ligado) {
      print("Este carro já está ligado.\n");
    } else {
      print("Ligando...");
      this.ligado = true;
      this.status();
    }
  },

  desligar: function () {
    if (!this.ligado) {
      print("Este carro já está desligado.\n");
    } else {
      if (this.velocidade == 0) {
        print("Desligando...");
        this.ligado = false;
        this.velocidade = 0;
        this.status();
      } else {
        print(`Velocidade atual: ${this.velocidade}. 
O carro só pode ser desligado em velocidade zero (0 Km/h). Desacelere!\n`);
      }
    }
  },

  acelerar: function () {
    if (!this.ligado) {
      print("Não é possível acelerar um carro desligado.\n");
    } else {
      print("Acelerando...");
      this.velocidade += 10;
      this.status();
    }
  },

  desacelerar: function () {
    if (!this.ligado) {
      print("Não é possível desacelerar um carro desligado.\n");
    } else {
      print("Desacelerando...");
      this.velocidade -= 10;
      this.status();
    }
  },

  status: function () {
    print(
      `Carro ${this.ligado ? "ligado." : "desligado."} Velocidade ${
        this.velocidade
      } Km/h.\n`
    );
  },
};

// carroExtraB.desacelerar();
// carroExtraB.ligar();
// carroExtraB.acelerar();
// carroExtraB.desligar();
// carroExtraB.desacelerar();
// carroExtraB.desligar();

// --------------- EXTRA C ---------------
// Implemente a função start/stop no carro, de forma que quando o carro
// estiver desligado e for acelerado, ele antes de acelerar, liga o carro.
// O contrário deve ser aplicado para o desacelerar: se o carro for desacelerado
// e a nova velocidade for zero, ele deve ser desligado.

const carroExtraC = {
  ligado: false,
  velocidade: 0,

  ligar: function () {
    if (this.ligado) {
      print("Este carro já está ligado.\n");
    } else {
      print("Ligando...");
      this.ligado = true;
      this.status();
    }
  },

  desligar: function () {
    if (!this.ligado) {
      print("Este carro já está desligado.\n");
    } else {
      if (this.velocidade == 0) {
        print("Desligando...");
        this.ligado = false;
        this.velocidade = 0;
        this.status();
      } else {
        print(`Velocidade atual: ${this.velocidade}. 
O carro só pode ser desligado em velocidade zero (0 Km/h). Desacelere!\n`);
      }
    }
  },

  acelerar: function () {
    if (!this.ligado) {
      print("Não é possível acelerar um carro desligado.\n");
    } else {
      print("Acelerando...");
      this.velocidade += 10;
      this.status();
    }
  },

  desacelerar: function () {
    if (!this.ligado) {
      print("Não é possível desacelerar um carro desligado.\n");
    } else {
      
      if (this.velocidade > 0) {
        print("Desacelerando...\n");        
        this.velocidade -= 10;
        this.status();
      } else print("Não é possível desacelerar.\n")
    }
  },

  status: function () {
    print(
      `Carro ${this.ligado ? "ligado." : "desligado."} Velocidade ${
        this.velocidade
      } Km/h.\n`
    );
  },

  startStop: function () {
    if (!this.ligado) {
      this.ligar();
      this.acelerar();
    } else {
      if (this.ligado && this.velocidade == 0) {
        this.desligar();
      }
    }
  },
};

// 

// print("Carro em estado-padrão (desligado e velocidade = 0): ");
// print("Acionando botão start/stop")
// carroExtraC.startStop();

// print("Após acionar o botão o carro ligou e acelerou a 10 Km/h.")

// print("\n******************************\n")

// print("Carro ligado e desacelerando a zero deve se desligar")
// carroExtraC.ligar();
// carroExtraC.status();
// carroExtraC.desacelerar();
// carroExtraC.startStop();
