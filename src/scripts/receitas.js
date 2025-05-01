/**
 * 
 * Função para exibir as opções de receitas no html
 * 
 */

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
      fetch('src/data/receitas.json').then(res => res.json()),
      fetch('src/data/itens.json').then(res => res.json())
    ]).then(([receitas, itens]) => {
      const container = document.getElementById('lista-receitas');
      if (!container) {
        console.error("Elemento 'lista-receitas' não encontrado!");
        return;
      }
  
      receitas.forEach(receita => {
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
    }).catch(err => console.error("Erro ao carregar JSONs:", err));
  });
  