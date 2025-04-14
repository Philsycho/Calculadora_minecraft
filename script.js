/**
 * De primeiro momento será definido o objeto receita, para armazenar 
 */

const receitas = {
    // versão 0.0.0
    "tabua_de_madeira" :{
        resultado : 4,
        ingredientes: {
            "bloco_de_madeira" : 1
        }
    },

    "graveto" : {
        resultado: 2,
        ingredientes : {
            "tabua_de_madeira" : 2
        }
    }
};

//#region function calcular
/*
 * Função para cacular os materiais.
 */

function calcular() {
    const item = document.getElementById("item").value;
    const qtd = parseInt(document.getElementById("quantidade").value, 10);
  
    const totais = {};
  
    function resolverItem(nome, quantidadeDesejada) {
      const receita = receitas[nome];
      if (!receita) {
        // Item base (essencial)
        totais[nome] = (totais[nome] || 0) + quantidadeDesejada;
        return;
      }
  
      const vezes = Math.ceil(quantidadeDesejada / receita.resultado);
  
      for (const ingrediente in receita.ingredientes) {
        const quantidadeNecessaria = receita.ingredientes[ingrediente] * vezes;
        resolverItem(ingrediente, quantidadeNecessaria);
      }
    }
  
    resolverItem(item, qtd);
  
    const resultadoEl = document.getElementById("resultado");
    resultadoEl.textContent = JSON.stringify(totais, null, 2);
  }
  //#endregion