/**
 * 
 * Função para exibir as opções de receitas no html
 * 
 */

fetch('src/data/receitas.json')
  .then(response => response.json())
  .then(receitas => {
    const container = document.getElementById('lista-receitas');

    receitas.forEach(receita => {
      const nomeItem = document.createElement('p');
      nomeItem.textContent = receita['nome-br'];
      container.appendChild(nomeItem);
    });
  })
  .catch(erro => {
    console.error("Erro ao carregar receitas:", erro);
  });
