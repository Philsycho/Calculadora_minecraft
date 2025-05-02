/**
 * Função para incluir as opções de tipos no select
 * do html, filtrando pelo tipo de item.
 */

fetch('src/data/tipo.json')
  .then(res => res.json())
  .then(tipos => {
    const select = document.getElementById('filtro-tipo');
  
    // Adiciona manualmente a opção "Todos"
    const opcaoTodos = document.createElement('option');
    opcaoTodos.value = 1;
    opcaoTodos.textContent = 'Todos';
    select.appendChild(opcaoTodos);
  
    tipos.forEach(tipo => {
      const option = document.createElement('option');
      option.value = tipo.id;
      option.textContent = tipo.descricao;
      select.appendChild(option);
    });
  });
  

  document.getElementById('filtro-tipo').addEventListener('change', e => {
    const tipoSelecionado = Number(e.target.value);
    renderizarItens(tipoSelecionado);
  });

  
/**
 * Função para exibir as opções de receitas no html
 */

function renderizarItens(tipoId = 1) {
  const container = document.getElementById('lista-receitas');
  container.innerHTML = ''; // limpa

  Promise.all([
    fetch('src/data/receitas.json').then(r => r.json()),
    fetch('src/data/itens.json').then(r => r.json())
  ]).then(([receitas, itens]) => {
    const receitasFiltradas = receitas.filter(receita => {
      if (tipoId === 1) return true;
      const itemInfo = itens.find(item => item.id === receita.id);
      return itemInfo?.tipo_id === tipoId;
    });

    receitasFiltradas.forEach(receita => {
      const itemInfo = itens.find(item => item.id === receita.id);
      if (!itemInfo) return;

      const div = document.createElement('div');
      div.className = 'select-itens-craft';
      div.innerHTML = `
        <div class="item-box">
          <button onclick="incrementar(this)">
            <img src="${itemInfo.imagem}" alt="${itemInfo['nome-br']}">
          </button>
        </div>
        <label>${itemInfo['nome-br']}</label>
        <input type="number" min="0" max="999">
      `;
      container.appendChild(div);
    });
  });
}
