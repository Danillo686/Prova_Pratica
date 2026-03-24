function obterAliquotaICMS(valorProduto) {
  if (valorProduto <= 150) {
    return 12; // operações gerais
  } else if (valorProduto <= 500) {
    return 18; // operações internas padrão
  } else {
    return 25; // produtos de maior tributação (simulação)
  }
}

function calcularPrecoFinal(custoProduto) {
  if (custoProduto <= 0) {
    return "Valor inválido. Informe um número positivo.";
  }

  const percentualImposto = obterAliquotaICMS(custoProduto);
  const imposto = custoProduto * (percentualImposto / 100);
  const precoFinal = custoProduto + imposto;

  return {
    precoBase: custoProduto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    aliquota: percentualImposto,
    imposto: imposto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    precoFinal: precoFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  };
}

// Captura os elementos da página
const botao = document.getElementById("enviar");
const entradaProduto = document.getElementById("enviar1");
const resultado = document.getElementById("result");

// Evento de clique no botão
botao.addEventListener("click", () => {
  const valorProduto = parseFloat(entradaProduto.value);

  const valores = calcularPrecoFinal(valorProduto);

  if (typeof valores === "string") {
    resultado.innerHTML = valores; // mensagem de erro
  } else {
    resultado.innerHTML = `
      <p>Preço do produto: ${valores.precoBase}</p>
      <p>Alíquota aplicada: ${valores.aliquota}%</p>
      <p>Imposto: ${valores.imposto}</p>
      <p><strong>Preço final com imposto: ${valores.precoFinal}</strong></p>
    `;
  }
});
