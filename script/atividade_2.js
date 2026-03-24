function calcularFrete(peso) {
        if (peso === "" || isNaN(peso) || peso < 0) {
            throw new Error("Peso inválido.");
        }

        if (peso <= 5) return 10.00;
        if (peso <= 20) return 20.00;
        return 50.00;
    }

    // Função para interagir com o HTML
    function exibirFrete() {
        const input = document.getElementById('pesoInput');
        const display = document.getElementById('resultado');
        
        try {
            const peso = parseFloat(input.value);
            const valor = calcularFrete(peso);
            display.classList.remove('erro');
            display.innerHTML = `Frete: R$ ${valor.toFixed(2).replace('.', ',')}`;
        } catch (e) {
            display.classList.add('erro');
            display.innerHTML = "⚠️ Informe um peso válido!";
        }
    }