
function calcularTotal() {

    let nome = document.getElementById("nome").value.trim();

// Validar o nome
if (nome === "") {
    alert("Por favor, informe seu nome!");
    return;
}


    let burger = Number(document.getElementById("x-burger-quantidade").value);
    let bacon = Number(document.getElementById("x-bacon-quantidade").value);
    let sanduiche = Number(document.getElementById("sanduiche-quantidade").value);
    let refrigerante = Number(document.getElementById("refrigerante-quantidade").value);
    let suco = Number(document.getElementById("suco-quantidade").value);
    let pudim = Number(document.getElementById("pudim-quantidade").value);

    let pagamento = document.getElementById("forma-pagamento").value;

    let quantidades = [burger, bacon, sanduiche, refrigerante, suco, pudim];

    for (let quantidade of quantidades) {
        if (!Number.isInteger(quantidade) || quantidade < 0) {
            alert("Erro! Informe quantidades válidas para os produtos.");
            return;
        }
    }

    let totalLanchesQuantidade = burger + bacon + sanduiche;

    if (totalLanchesQuantidade === 0) {
        alert("Escolha pelo menos um lanche para continuar!");
        return;
    }

    if (pagamento === "") {
        alert("Selecione uma forma de pagamento!");
        return;
    }

    let totalLanches =
        (burger * 1800) +
        (bacon * 2400) +
        (sanduiche * 1500);

    let totalBebidas =
        (refrigerante * 700) +
        (suco * 600);

    let totalSobremesa = pudim * 800;

    let subtotal = totalLanches + totalBebidas + totalSobremesa;

    let descontoLanches = 0;

    if (totalLanchesQuantidade >= 3) {
        descontoLanches = Math.round(totalLanches * 0.10);
    }

    let valorAposDesconto = subtotal - descontoLanches;

    let descontoPix = 0;

    if (pagamento === "pix") {
        descontoPix = Math.round(valorAposDesconto * 0.05);
    }

    let valorFinal = valorAposDesconto - descontoPix;

    let mensagem = "";

    if (valorFinal <= 3000) {
        mensagem = "Pedido econômico!";
    } else if (valorFinal <= 7000) {
        mensagem = "Pedido intermediário!";
    } else {
        mensagem = "Pedido completo!";
    }

    function formatarMoeda(valor) {
        return (valor / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

let resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h3>Resumo do Pedido</h3>

        <p>Cliente: ${nome}</p>

        <p>Total dos lanches: ${formatarMoeda(totalLanches)}</p>

        <p>Total das bebidas: ${formatarMoeda(totalBebidas)}</p>

        <p>Total da sobremesa: ${formatarMoeda(totalSobremesa)}</p>

        <hr>

        <p>Subtotal: ${formatarMoeda(subtotal)}</p>

        <p>Desconto dos lanches: ${formatarMoeda(descontoLanches)}</p>

        <p>Desconto Pix: ${formatarMoeda(descontoPix)}</p>

        <hr>

        <h3>Valor final: ${formatarMoeda(valorFinal)}</h3>

        <h3>${mensagem}</h3>
    `;
}