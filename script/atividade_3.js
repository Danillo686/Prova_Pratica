 // 1. Função para calcular o frete por peso
function calcularFretePorPeso(peso) {
    if (peso <= 5) return 10.00;
    if (peso <= 20) return 20.00;
    return 50.00;
}

// 2. Função principal de cálculo final (Regras de desconto)
function calcularValorFinal(subtotal, frete) {
    let percentualDesconto = 0;
    if (subtotal > 500) {
        percentualDesconto = 0.15;
    } else if (subtotal >= 200) {
        percentualDesconto = 0.05;
    }

        const valorDesconto = subtotal * percentualDesconto;
        const subtotalComDesconto = subtotal - valorDesconto;
        const total = subtotalComDesconto + frete;

        return {
            desconto: valorDesconto,
            total: total
        };
    }

    // 3. Função de interface (DOM)
    function processarCompra() {
        const subtotalInput = parseFloat(document.getElementById('valorCompra').value);
        const pesoInput = parseFloat(document.getElementById('pesoTotal').value);
        const erroMsg = document.getElementById('erroMsg');
        const cupom = document.getElementById('cupom-fiscal');

        // Validação
        if (isNaN(subtotalInput) || isNaN(pesoInput) || subtotalInput < 0 || pesoInput < 0) {
            erroMsg.style.display = 'block';
            cupom.style.display = 'none';
            return;
        }

        erroMsg.style.display = 'none';

        // Cálculos
        const frete = calcularFretePorPeso(pesoInput);
        const resultado = calcularValorFinal(subtotalInput, frete);

        // Atualizar Tela (Formatando moeda para PT-BR)
        const formatar = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        document.getElementById('res-subtotal').innerText = formatar(subtotalInput);
        document.getElementById('res-desconto').innerText = `- ${formatar(resultado.desconto)}`;
        document.getElementById('res-frete').innerText = formatar(frete);
        document.getElementById('res-total').innerText = formatar(resultado.total);

        cupom.style.display = 'block';
    }
