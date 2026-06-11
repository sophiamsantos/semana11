// ============================================================
// Dashboard - visualização dos dados do catálogo com Chart.js
// Reaproveita a base "data" e a função formatPrice definidas em app.js
// ============================================================

// Paleta de cores alinhada ao tema do site
const CORES = ["#1f3a5f", "#1f7a3a", "#f5a623", "#2d568a", "#c0392b", "#8e44ad", "#16a085", "#e67e22"];

// guarda as instâncias de gráficos para poder destruí-las antes de redesenhar
const graficos = {};

// ------------------------------------------------------------
// Funções de agregação (processamento dos dados)
// ------------------------------------------------------------

// conta quantos produtos existem em cada categoria
function contarPorCategoria(produtos) {
    const mapa = {};
    produtos.forEach(function (p) {
        mapa[p.categoria] = (mapa[p.categoria] || 0) + 1;
    });
    return mapa;
}

// conta produtos em estoque x indisponíveis
function contarPorEstoque(produtos) {
    let emEstoque = 0;
    let indisponivel = 0;
    produtos.forEach(function (p) {
        if (p.emEstoque) {
            emEstoque++;
        } else {
            indisponivel++;
        }
    });
    return { emEstoque: emEstoque, indisponivel: indisponivel };
}

// calcula a média de um campo numérico agrupando por uma chave
function mediaPorChave(produtos, chaveAgrupamento, campoValor) {
    const soma = {};
    const qtd = {};
    produtos.forEach(function (p) {
        const chave = p[chaveAgrupamento];
        soma[chave] = (soma[chave] || 0) + p[campoValor];
        qtd[chave] = (qtd[chave] || 0) + 1;
    });

    const medias = {};
    Object.keys(soma).forEach(function (chave) {
        medias[chave] = soma[chave] / qtd[chave];
    });
    return medias;
}

// ------------------------------------------------------------
// Indicadores (KPIs)
// ------------------------------------------------------------
function renderKpis(produtos) {
    const container = document.getElementById("kpi-cards");
    if (!container) return;

    const total = produtos.length;

    const somaPreco = produtos.reduce(function (acc, p) { return acc + p.preco; }, 0);
    const precoMedio = total > 0 ? somaPreco / total : 0;

    const somaAval = produtos.reduce(function (acc, p) { return acc + p.avaliacao; }, 0);
    const avalMedia = total > 0 ? somaAval / total : 0;

    const emEstoque = produtos.filter(function (p) { return p.emEstoque; }).length;
    const percEstoque = total > 0 ? Math.round((emEstoque / total) * 100) : 0;

    const kpis = [
        { rotulo: "Produtos", valor: total, cor: "#1f3a5f" },
        { rotulo: "Preço médio", valor: formatPrice(precoMedio), cor: "#1f7a3a" },
        { rotulo: "Avaliação média", valor: avalMedia.toFixed(1) + " / 5.0", cor: "#f5a623" },
        { rotulo: "Em estoque", valor: percEstoque + "%", cor: "#2d568a" }
    ];

    container.innerHTML = "";
    kpis.forEach(function (kpi) {
        const card = document.createElement("div");
        card.classList.add("kpi-card");
        card.style.borderTopColor = kpi.cor;
        card.innerHTML =
            '<span class="kpi-valor" style="color:' + kpi.cor + '">' + kpi.valor + "</span>" +
            '<span class="kpi-rotulo">' + kpi.rotulo + "</span>";
        container.appendChild(card);
    });
}

// ------------------------------------------------------------
// Helper: cria/atualiza um gráfico destruindo o anterior
// ------------------------------------------------------------
function montarGrafico(id, config) {
    if (graficos[id]) {
        graficos[id].destroy();
    }
    const ctx = document.getElementById(id).getContext("2d");
    graficos[id] = new Chart(ctx, config);
}

// ------------------------------------------------------------
// Construção dos gráficos
// ------------------------------------------------------------
function renderGraficos(produtos) {
    // 1) Pizza/Rosca - produtos por categoria
    const porCategoria = contarPorCategoria(produtos);
    montarGrafico("chartCategorias", {
        type: "doughnut",
        data: {
            labels: Object.keys(porCategoria),
            datasets: [{
                data: Object.values(porCategoria),
                backgroundColor: CORES,
                borderColor: "#fff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } }
        }
    });

    // 2) Rosca - disponibilidade em estoque
    const estoque = contarPorEstoque(produtos);
    montarGrafico("chartEstoque", {
        type: "doughnut",
        data: {
            labels: ["Em estoque", "Indisponível"],
            datasets: [{
                data: [estoque.emEstoque, estoque.indisponivel],
                backgroundColor: ["#1f7a3a", "#c0392b"],
                borderColor: "#fff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: "bottom" } }
        }
    });

    // 3) Barras - preço médio por categoria
    const precoCat = mediaPorChave(produtos, "categoria", "preco");
    montarGrafico("chartPrecoCategoria", {
        type: "bar",
        data: {
            labels: Object.keys(precoCat),
            datasets: [{
                label: "Preço médio (R$)",
                data: Object.values(precoCat).map(function (v) { return Number(v.toFixed(2)); }),
                backgroundColor: "#1f3a5f"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function (v) { return "R$ " + v; } }
                }
            }
        }
    });

    // 4) Barras horizontais - avaliação média por marca
    const avalMarca = mediaPorChave(produtos, "marca", "avaliacao");
    montarGrafico("chartAvaliacaoMarca", {
        type: "bar",
        data: {
            labels: Object.keys(avalMarca),
            datasets: [{
                label: "Avaliação média",
                data: Object.values(avalMarca).map(function (v) { return Number(v.toFixed(2)); }),
                backgroundColor: "#f5a623"
            }]
        },
        options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { beginAtZero: true, max: 5 } }
        }
    });

    // 5) Barras - preço por produto (ordenado do maior para o menor)
    const ordenados = produtos.slice().sort(function (a, b) { return b.preco - a.preco; });
    montarGrafico("chartPrecoProduto", {
        type: "bar",
        data: {
            labels: ordenados.map(function (p) { return p.nome; }),
            datasets: [{
                label: "Preço (R$)",
                data: ordenados.map(function (p) { return p.preco; }),
                backgroundColor: ordenados.map(function (p) {
                    return p.emEstoque ? "#1f7a3a" : "#c0392b";
                })
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (ctx) { return formatPrice(ctx.raw); }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: function (v) { return "R$ " + v; } }
                }
            }
        }
    });
}

// ------------------------------------------------------------
// Filtro de categoria + inicialização
// ------------------------------------------------------------
function atualizarDashboard(produtos) {
    renderKpis(produtos);
    renderGraficos(produtos);
}

function preencherSelectCategorias() {
    const select = document.getElementById("dash-category");
    const categorias = [];
    data.produtos.forEach(function (p) {
        if (categorias.indexOf(p.categoria) === -1) {
            categorias.push(p.categoria);
        }
    });
    categorias.forEach(function (cat) {
        const opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        select.appendChild(opt);
    });
}

function filtrarPorCategoria(categoria) {
    if (categoria === "Todas") {
        return data.produtos;
    }
    return data.produtos.filter(function (p) { return p.categoria === categoria; });
}

// só executa se a página tiver os elementos do dashboard
if (typeof data !== "undefined" && document.getElementById("kpi-cards")) {
    const select = document.getElementById("dash-category");
    const btnReset = document.getElementById("dash-reset");

    preencherSelectCategorias();

    select.addEventListener("change", function () {
        atualizarDashboard(filtrarPorCategoria(select.value));
    });

    btnReset.addEventListener("click", function () {
        select.value = "Todas";
        atualizarDashboard(data.produtos);
    });

    // primeira renderização com todos os produtos
    atualizarDashboard(data.produtos);
}
