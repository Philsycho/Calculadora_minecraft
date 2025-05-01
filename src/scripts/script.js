/*
 * 
 * Função para incrementar a quantidade no input do html.
 * 
 */

function incrementar(botao) {
    const container = botao.closest(".select-itens-craft");
    const input = container.querySelector("input[type='number']");
    let atual = parseInt(input.value) || 0;
    if (atual < parseInt(input.max)) {
        input.value = atual + 1;
    }
}