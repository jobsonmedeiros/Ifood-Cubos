print = (arg) => console.log(arg);

const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],

  valorPorQuestao: function () {
    return this.valor / this.questoes.length;
  },

  acertos: function () {
    let totalAcertos = 0;
    for (let i = 0; i < this.questoes.length; i++) {
      if (this.questoes[i].resposta === this.questoes[i].correta) {
        totalAcertos++;
      }
    }
    return totalAcertos;
  },
};

function corrigeProva(prova) {}

print(`O(a) aluno(a) ${prova.aluno} acertou ${prova.acertos()} questão(ões) e obteve nota ${prova.acertos() * prova.valorPorQuestao()}`)
//O aluno(a) João acertou 3 questões e obteve nota 6


