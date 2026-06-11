// ============================================================
// Página de Favoritos (favoritos.html)
// ============================================================

(function () {
    const favoritosList = document.getElementById("favoritos-list");
    if (!favoritosList) return;

    // Redireciona se não estiver logado
    function getUsuarioCorrente() {
        const dados = sessionStorage.getItem("usuarioCorrente");
        return dados ? JSON.parse(dados) : null;
    }

    const usuario = getUsuarioCorrente();
    if (!usuario) {
        window.location.href = "./modulos/login/index.html";
        return;
    }

    // Carrega favoritos do usuário
    function getFavoritos(userId) {
        const key = "favoritos_" + userId;
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    }

    function setFavoritos(userId, ids) {
        localStorage.setItem("favoritos_" + userId, JSON.stringify(ids));
    }

    function toggleFavorito(userId, produtoId) {
        let favs = getFavoritos(userId);
        const idx = favs.indexOf(produtoId);
        if (idx === -1) {
            favs.push(produtoId);
        } else {
            favs.splice(idx, 1);
        }
        setFavoritos(userId, favs);
        return favs;
    }

    function formatPrice(valor) {
        return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }

    // Cria card de produto favorito
    function createFavCard(produto) {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = produto.imagem;
        img.alt = produto.nome;
        img.style.cursor = "pointer";
        img.addEventListener("click", () => { window.location.href = "detalhes.html?id=" + produto.id; });

        const titulo = document.createElement("h3");
        titulo.classList.add("card-title");
        titulo.style.cursor = "pointer";
        titulo.textContent = produto.nome;
        titulo.addEventListener("click", () => { window.location.href = "detalhes.html?id=" + produto.id; });

        const categoria = document.createElement("span");
        categoria.classList.add("card-category");
        categoria.textContent = produto.categoria;

        const preco = document.createElement("p");
        preco.classList.add("card-price");
        preco.textContent = formatPrice(produto.preco);

        const botoes = document.createElement("div");
        botoes.classList.add("card-buttons");

        const linkDetalhes = document.createElement("a");
        linkDetalhes.classList.add("btn-details");
        linkDetalhes.href = "detalhes.html?id=" + produto.id;
        linkDetalhes.textContent = "Ver detalhes";

        const btnFav = document.createElement("button");
        btnFav.classList.add("btn-favoritar", "favoritado");
        btnFav.title = "Remover dos favoritos";
        btnFav.innerHTML = "❤️";
        btnFav.addEventListener("click", function () {
            toggleFavorito(usuario.id, produto.id);
            // Remove o card da listagem imediatamente
            card.style.transition = "opacity 0.3s";
            card.style.opacity = "0";
            setTimeout(() => {
                card.remove();
                if (favoritosList.children.length === 0) renderVazio();
            }, 300);
        });

        botoes.appendChild(linkDetalhes);
        botoes.appendChild(btnFav);

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(categoria);
        card.appendChild(preco);
        card.appendChild(botoes);

        return card;
    }

    function renderVazio() {
        favoritosList.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#777;">
                <p style="font-size:48px;margin-bottom:16px;">💔</p>
                <h3 style="margin-bottom:8px;color:#555;">Nenhum favorito ainda</h3>
                <p>Explore o catálogo e favorite os produtos que você gostou!</p>
                <a href="index.html" style="display:inline-block;margin-top:20px;background:#1f3a5f;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">Ver catálogo</a>
            </div>
        `;
    }

    function renderFavoritos() {
        const ids = getFavoritos(usuario.id);
        favoritosList.innerHTML = "";

        if (ids.length === 0) {
            renderVazio();
            return;
        }

        const produtosFav = data.produtos.filter(p => ids.includes(p.id));
        if (produtosFav.length === 0) {
            renderVazio();
            return;
        }

        produtosFav.forEach(p => {
            favoritosList.appendChild(createFavCard(p));
        });
    }

    renderFavoritos();
})();
