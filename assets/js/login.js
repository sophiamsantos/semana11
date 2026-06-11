// ============================================================
// Módulo de Login - login.js
// ============================================================

// Dados dos usuários (simulando JSON Server com fetch('/usuarios'))
const usuariosDB = [
    { id: 1, nome: "Administrador", login: "admin", senha: "123", email: "admin@ecommerce.com" },
    { id: 2, nome: "Usuário",       login: "user",  senha: "123", email: "user@ecommerce.com"  }
];

/**
 * Inicializa o módulo de login.
 * Verifica se o usuário está logado; caso contrário, redireciona para a tela de login.
 * Também atualiza a área de login no header.
 */
function initLoginApp() {
    // Simula fetch('/usuarios') — em produção seria uma chamada real ao JSON Server
    const usuarios = usuariosDB;

    // Verifica se estamos na home page (index.html ou raiz)
    const isHomePage = !window.location.pathname.includes("modulos/login") &&
                       !window.location.pathname.includes("favoritos.html") &&
                       !window.location.pathname.includes("dashboard.html") &&
                       !window.location.pathname.includes("detalhes.html");

    // Atualiza a área de login no header
    atualizarAreaLogin();

    // Se estiver na home e não logado, redireciona
    if (isHomePage && !getUsuarioCorrente()) {
        window.location.href = "./modulos/login/index.html";
    }
}

/**
 * Realiza o login do usuário.
 * @param {string} login
 * @param {string} senha
 * @returns {boolean} true se login bem-sucedido, false caso contrário
 */
function loginUser(login, senha) {
    const usuarios = usuariosDB;
    const usuario = usuarios.find(u => u.login === login && u.senha === senha);

    if (usuario) {
        const usuarioCorrente = {
            id:    usuario.id,
            nome:  usuario.nome,
            login: usuario.login,
            senha: usuario.senha,
            email: usuario.email
        };
        sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));
        return true;
    }
    return false;
}

/**
 * Realiza o logout, apagando os dados da sessão.
 */
function logoutUser() {
    sessionStorage.removeItem("usuarioCorrente");
    window.location.href = "./modulos/login/index.html";
}

/**
 * Retorna o objeto do usuário corrente ou null.
 * @returns {object|null}
 */
function getUsuarioCorrente() {
    const dados = sessionStorage.getItem("usuarioCorrente");
    return dados ? JSON.parse(dados) : null;
}

/**
 * Atualiza a área de login no header da página.
 */
function atualizarAreaLogin() {
    const areaLogin = document.getElementById("area-login");
    if (!areaLogin) return;

    const usuario = getUsuarioCorrente();

    if (usuario) {
        areaLogin.innerHTML = `
            <span class="login-saudacao">Olá, <strong>${usuario.nome}</strong></span>
            <a href="#" class="btn-logout" onclick="logoutUser(); return false;">Sair</a>
        `;
    } else {
        areaLogin.innerHTML = `
            <a href="./modulos/login/index.html" class="btn-entrar">Entrar</a>
        `;
    }
}

// Inicializa o módulo assim que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initLoginApp);
