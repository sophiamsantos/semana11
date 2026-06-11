// ============================================================
// Base de dados (JSON) - compartilhada entre index.html e detalhes.html
// ============================================================
const data = {
    produtos: [
        {
            id: 1,
            nome: "iPhone 15 Pro",
            preco: 8999.90,
            categoria: "Celulares",
            imagem: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
            descricao: "Smartphone Apple com tela Super Retina XDR de 6.1 polegadas e chip A17 Pro.",
            emEstoque: true,
            marca: "Apple",
            avaliacao: 4.8,
            parcelas: "12x de R$ 749,99 sem juros",
            caracteristicas: [
                "Tela Super Retina XDR de 6.1 polegadas",
                "Chip A17 Pro com GPU de 6 núcleos",
                "Câmera tripla de 48MP",
                "Bateria com até 23h de reprodução de vídeo",
                "Resistência à água IP68"
            ]
        },
        {
            id: 2,
            nome: "Samsung Galaxy S24",
            preco: 6499.00,
            categoria: "Celulares",
            imagem: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
            descricao: "Smartphone Samsung com câmera de 50MP e processador Snapdragon 8 Gen 3.",
            emEstoque: true,
            marca: "Samsung",
            avaliacao: 4.6,
            parcelas: "12x de R$ 541,58 sem juros",
            caracteristicas: [
                "Tela Dynamic AMOLED 2X de 6.2 polegadas",
                "Processador Snapdragon 8 Gen 3",
                "Câmera tripla de 50MP + 12MP + 10MP",
                "Bateria de 4.000mAh com carregamento rápido",
                "Recursos de IA Galaxy AI integrados"
            ]
        },
        {
            id: 3,
            nome: "Notebook Dell Inspiron 15",
            preco: 4299.00,
            categoria: "Notebooks",
            imagem: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop",
            descricao: "Notebook com processador Intel Core i5, 8GB RAM e SSD de 512GB.",
            emEstoque: true,
            marca: "Dell",
            avaliacao: 4.3,
            parcelas: "10x de R$ 429,90 sem juros",
            caracteristicas: [
                "Processador Intel Core i5 de 12ª geração",
                "8GB de memória RAM DDR4",
                "SSD de 512GB NVMe",
                "Tela Full HD de 15.6 polegadas",
                "Windows 11 Home"
            ]
        },
        {
            id: 4,
            nome: "MacBook Air M3",
            preco: 12500.00,
            categoria: "Notebooks",
            imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
            descricao: "Notebook Apple com chip M3, 16GB de memória unificada e SSD de 512GB.",
            emEstoque: false,
            marca: "Apple",
            avaliacao: 4.9,
            parcelas: "12x de R$ 1.041,67 sem juros",
            caracteristicas: [
                "Chip Apple M3 com CPU de 8 núcleos",
                "16GB de memória unificada",
                "SSD de 512GB",
                "Tela Liquid Retina de 13.6 polegadas",
                "Até 18 horas de bateria"
            ]
        },
        {
            id: 5,
            nome: "Fone Bluetooth JBL",
            preco: 299.90,
            categoria: "Acessórios",
            imagem: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
            descricao: "Fone de ouvido sem fio com bateria de até 40 horas e som puro JBL.",
            emEstoque: true,
            marca: "JBL",
            avaliacao: 4.5,
            parcelas: "6x de R$ 49,98 sem juros",
            caracteristicas: [
                "Conexão Bluetooth 5.0",
                "Bateria de até 40 horas",
                "Drivers de 40mm",
                "Função multiponto para 2 dispositivos",
                "Cabo de carregamento USB-C"
            ]
        },
        {
            id: 6,
            nome: "Mouse Logitech MX Master 3",
            preco: 749.00,
            categoria: "Acessórios",
            imagem: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
            descricao: "Mouse sem fio ergonômico com rolagem MagSpeed e até 70 dias de bateria.",
            emEstoque: true,
            marca: "Logitech",
            avaliacao: 4.7,
            parcelas: "10x de R$ 74,90 sem juros",
            caracteristicas: [
                "Rolagem eletromagnética MagSpeed",
                "Sensor Darkfield de 4.000 DPI",
                "Até 70 dias de bateria",
                "Conexão USB-C e Bluetooth",
                "Design ergonômico para mão direita"
            ]
        },
        {
            id: 7,
            nome: "PlayStation 5",
            preco: 3999.00,
            categoria: "Games",
            imagem: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
            descricao: "Console Sony PS5 com SSD ultrarrápido e controle DualSense.",
            emEstoque: true,
            marca: "Sony",
            avaliacao: 4.8,
            parcelas: "12x de R$ 333,25 sem juros",
            caracteristicas: [
                "SSD ultrarrápido de 825GB",
                "GPU AMD RDNA 2 personalizada",
                "Controle DualSense com feedback háptico",
                "Saída de vídeo 4K a 120Hz",
                "Áudio 3D Tempest"
            ]
        },
        {
            id: 8,
            nome: "Xbox Series X",
            preco: 4499.00,
            categoria: "Games",
            imagem: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=300&fit=crop",
            descricao: "Console Microsoft com 1TB SSD, 4K nativo e até 120 fps.",
            emEstoque: false,
            marca: "Microsoft",
            avaliacao: 4.7,
            parcelas: "12x de R$ 374,92 sem juros",
            caracteristicas: [
                "SSD NVMe de 1TB",
                "CPU AMD Zen 2 de 8 núcleos",
                "Resolução 4K nativa a 60fps",
                "Suporte a Quick Resume",
                "Compatível com Xbox Game Pass"
            ]
        },
        {
            id: 9,
            nome: "Teclado Mecânico Redragon",
            preco: 349.90,
            categoria: "Acessórios",
            imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
            descricao: "Teclado mecânico gamer com switches blue e iluminação RGB.",
            emEstoque: true,
            marca: "Redragon",
            avaliacao: 4.4,
            parcelas: "6x de R$ 58,32 sem juros",
            caracteristicas: [
                "Switches mecânicos blue",
                "Iluminação RGB de 16 milhões de cores",
                "Estrutura em alumínio",
                "Anti-ghosting com N-Key Rollover",
                "Layout ABNT2 com cedilha"
            ]
        }
    ]
};

// ============================================================
// Funções utilitárias - usadas pelas duas páginas
// ============================================================

// formata o preço para o padrão brasileiro
function formatPrice(preco) {
    return "R$ " + preco.toFixed(2).replace(".", ",");
}

// busca um produto pelo id na base de dados
function findProductById(id) {
    const idNum = Number(id);
    for (let i = 0; i < data.produtos.length; i++) {
        if (data.produtos[i].id === idNum) {
            return data.produtos[i];
        }
    }
    return null;
}

// lê o valor de um parâmetro da query string (ex.: ?id=2)
function getQueryParam(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
}

// ============================================================
// PÁGINA HOME (index.html) - renderiza a lista de produtos
// ============================================================
const productList = document.getElementById("product-list");

// ============================================================
// FAVORITOS - funções utilitárias (usadas em index.html e favoritos.html)
// ============================================================

function getUsuarioCorrente() {
    const dados = sessionStorage.getItem("usuarioCorrente");
    return dados ? JSON.parse(dados) : null;
}

function getFavoritos(userId) {
    const raw = localStorage.getItem("favoritos_" + userId);
    return raw ? JSON.parse(raw) : [];
}

function setFavoritos(userId, ids) {
    localStorage.setItem("favoritos_" + userId, JSON.stringify(ids));
}

function isFavorito(userId, produtoId) {
    return getFavoritos(userId).includes(produtoId);
}

function toggleFavorito(userId, produtoId) {
    let favs = getFavoritos(userId);
    const idx = favs.indexOf(produtoId);
    if (idx === -1) { favs.push(produtoId); }
    else            { favs.splice(idx, 1);  }
    setFavoritos(userId, favs);
    return favs;
}

// ============================================================

if (productList) {
    const searchInput = document.querySelector("#search");
    const categorySelect = document.querySelector("#category");
    const btnRender = document.getElementById("btnRender");

    // cria um card de produto reutilizável e retorna o elemento pronto
    function createProductCard(produto) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", produto.id);
        card.setAttribute("data-categoria", produto.categoria);

        card.style.padding = "12px";
        card.style.borderRadius = "8px";

        const img = document.createElement("img");
        img.setAttribute("src", produto.imagem);
        img.setAttribute("alt", produto.nome);
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            window.location.href = "detalhes.html?id=" + produto.id;
        });

        const titulo = document.createElement("h3");
        titulo.classList.add("card-title");
        titulo.style.cursor = "pointer";
        titulo.textContent = produto.nome;
        titulo.addEventListener("click", function () {
            window.location.href = "detalhes.html?id=" + produto.id;
        });

        const categoria = document.createElement("span");
        categoria.classList.add("card-category");
        categoria.textContent = produto.categoria;

        const preco = document.createElement("p");
        preco.classList.add("card-price");
        preco.textContent = formatPrice(produto.preco);

        const botoes = document.createElement("div");
        botoes.classList.add("card-buttons");

        // link de detalhes usa query string para identificar o produto
        const linkDetalhes = document.createElement("a");
        linkDetalhes.classList.add("btn-details");
        linkDetalhes.setAttribute("href", "detalhes.html?id=" + produto.id);
        linkDetalhes.textContent = "Ver detalhes";

        const btnDestacar = document.createElement("button");
        btnDestacar.classList.add("btn-highlight");
        btnDestacar.textContent = "Destacar";
        btnDestacar.addEventListener("click", function () {
            card.classList.toggle("highlight");
        });

        // Botão de favoritar
        const btnFav = document.createElement("button");
        btnFav.classList.add("btn-favoritar");
        btnFav.title = "Favoritar";

        const usuarioAtual = getUsuarioCorrente();
        const jaFavoritado  = usuarioAtual && isFavorito(usuarioAtual.id, produto.id);
        if (jaFavoritado) {
            btnFav.classList.add("favoritado");
            card.classList.add("card-favorito");
        }
        btnFav.innerHTML = jaFavoritado ? "❤️" : "🤍";

        btnFav.addEventListener("click", function () {
            const usuario = getUsuarioCorrente();
            if (!usuario) {
                // Usuário não logado — exibe aviso e redireciona
                if (confirm("Você precisa estar logado para favoritar produtos.\nDeseja fazer login agora?")) {
                    window.location.href = "./modulos/login/index.html";
                }
                return;
            }
            const novaLista = toggleFavorito(usuario.id, produto.id);
            const agora = novaLista.includes(produto.id);
            btnFav.innerHTML = agora ? "❤️" : "🤍";
            btnFav.classList.toggle("favoritado", agora);
            card.classList.toggle("card-favorito", agora);
            btnFav.title = agora ? "Remover dos favoritos" : "Favoritar";
        });

        botoes.appendChild(linkDetalhes);
        botoes.appendChild(btnDestacar);
        botoes.appendChild(btnFav);

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(categoria);
        card.appendChild(preco);
        card.appendChild(botoes);

        return card;
    }

    // renderiza a lista de produtos na página
    function renderProducts(produtos) {
        productList.innerHTML = "";

        if (produtos.length === 0) {
            productList.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#777'>Nenhum produto encontrado.</p>";
            return;
        }

        produtos.forEach(function (produto) {
            const card = createProductCard(produto);
            productList.appendChild(card);
        });

        const todosOsCards = document.querySelectorAll(".card");
        console.log("Total de cards renderizados:", todosOsCards.length);
        todosOsCards.forEach(function (cardEl) {
            cardEl.style.transition = "transform 0.15s ease";
        });
    }

    // preenche o select de categorias dinamicamente
    function renderCategories() {
        categorySelect.innerHTML = '<option value="Todas">Todas</option>';

        const categorias = [];
        data.produtos.forEach(function (produto) {
            if (categorias.indexOf(produto.categoria) === -1) {
                categorias.push(produto.categoria);
            }
        });

        categorias.forEach(function (cat) {
            const option = document.createElement("option");
            option.setAttribute("value", cat);
            option.textContent = cat;
            categorySelect.appendChild(option);
        });
    }

    // filtra a lista a partir do texto de busca e categoria selecionada
    function filterProducts() {
        const texto = searchInput.value.trim().toLowerCase();
        const categoria = categorySelect.value;

        return data.produtos.filter(function (produto) {
            const nomeBate = produto.nome.toLowerCase().includes(texto);
            const categoriaBate = categoria === "Todas" || produto.categoria === categoria;
            return nomeBate && categoriaBate;
        });
    }

    // eventos da home
    searchInput.addEventListener("input", function () {
        renderProducts(filterProducts());
    });

    categorySelect.addEventListener("change", function () {
        renderProducts(filterProducts());
    });

    btnRender.addEventListener("click", function () {
        searchInput.value = "";
        categorySelect.value = "Todas";
        renderProducts(data.produtos);
        console.log("Catálogo recarregado!");
    });

    // inicialização da home
    renderCategories();
    renderProducts(data.produtos);
}

// ============================================================
// PÁGINA DE DETALHES (detalhes.html) - carrega o item pelo id da URL
// ============================================================
const productDetailsPage = document.getElementById("product-details-page");

if (productDetailsPage) {
    // monta o HTML da página de detalhes a partir de um produto
    function renderProductDetails(produto) {
        const estoqueClasse = produto.emEstoque ? "in-stock" : "out-stock";
        const estoqueTexto = produto.emEstoque ? "Em estoque" : "Indisponível";

        const caracteristicasHTML = produto.caracteristicas
            .map(function (item) { return "<li>" + item + "</li>"; })
            .join("");

        productDetailsPage.innerHTML = `
            <div class="details-grid">
                <div class="details-image">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
                <div class="details-info">
                    <span class="card-category">${produto.categoria}</span>
                    <h2>${produto.nome}</h2>
                    <p class="details-brand"><strong>Marca:</strong> ${produto.marca}</p>
                    <p class="details-rating">Avaliação: ${produto.avaliacao} / 5.0</p>
                    <p class="details-price">${formatPrice(produto.preco)}</p>
                    <p class="details-parcelas">${produto.parcelas}</p>
                    <p class="details-stock"><strong>Status:</strong> <span class="${estoqueClasse}">${estoqueTexto}</span></p>
                    <button class="btn-buy" ${produto.emEstoque ? "" : "disabled"}>
                        ${produto.emEstoque ? "Comprar agora" : "Produto indisponível"}
                    </button>
                </div>
            </div>

            <section class="details-section">
                <h3>Descrição</h3>
                <p>${produto.descricao}</p>
            </section>

            <section class="details-section">
                <h3>Características</h3>
                <ul class="details-features">${caracteristicasHTML}</ul>
            </section>
        `;

        document.title = "Mini Ecommerce - " + produto.nome;
    }

    // mensagem de erro quando o id é inválido ou inexistente
    function renderProductNotFound() {
        productDetailsPage.innerHTML = `
            <div class="details-empty">
                <h2>Produto não encontrado</h2>
                <p>O produto que você está procurando não existe ou foi removido do catálogo.</p>
                <a href="index.html" class="btn-back">Voltar para o catálogo</a>
            </div>
        `;
    }

    // inicialização da página de detalhes
    const idDoProduto = getQueryParam("id");
    const produto = findProductById(idDoProduto);

    if (produto) {
        renderProductDetails(produto);
    } else {
        renderProductNotFound();
    }
}
