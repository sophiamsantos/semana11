# Mini Ecommerce — Semana 11

**Aluno:** [Seu Nome]  
**Matrícula:** [Sua Matrícula]

---

## Funcionalidades implementadas

### 1. Módulo de Login
- Script em `assets/js/login.js` incluído na `index.html` via tag `<script>`.
- Ao carregar a home, o sistema verifica `sessionStorage` para o objeto `usuarioCorrente`. Se não houver usuário logado, o browser é redirecionado para `modulos/login/index.html`.
- O formulário de login valida login/senha contra os usuários cadastrados (`admin/123` e `user/123`).
- Após login bem-sucedido, o objeto `usuarioCorrente` é salvo no `sessionStorage` e o usuário é redirecionado para `index.html`.
- O header exibe **"Olá, \<nome\> | Sair"** quando logado, ou o link **"Entrar"** quando não logado.
- O link "Sair" chama `logoutUser()`, que limpa o `sessionStorage` e redireciona para o login.

### 2. Funcionalidade de Favoritos
- Em cada card da home há um botão ❤️ / 🤍 (Favoritar).
- Usuários **não logados** veem um `confirm()` perguntando se desejam fazer login antes de favoritar.
- Usuários **logados** podem favoritar/desfavoritar clicando no botão.
- Os favoritos são persistidos no `localStorage` com a chave `favoritos_<idDoUsuario>` como array de ids: `[1, 3, 7]`.
- Cards favoritados aparecem com borda vermelha, ícone ❤️ preenchido e badge "❤️ Favorito".
- Ao recarregar a página os favoritos continuam marcados.

### 3. Página "Meus Favoritos" (`favoritos.html`)
- Lista apenas os produtos favoritados do usuário logado.
- Ao clicar no ❤️ dentro desta página, o item é removido dos favoritos imediatamente.
- Se não houver favoritos, exibe mensagem amigável com link para o catálogo.
- Redireciona para login se o usuário não estiver autenticado.

---

## Prints

> *(Inserir prints conforme solicitado pelo professor)*

### Home mostrando usuário logado
`[Print: header com "Olá, Administrador | Sair"]`

### Funcionalidade de favoritos
`[Print: cards com borda vermelha e ícone ❤️]`

### Página Meus Favoritos
`[Print: favoritos.html listando produtos favoritados]`

---

## Como executar

```bash
npm install -g json-server   # se ainda não tiver
json-server --watch db.json  # inicia o servidor na porta 3000
# Abra index.html no navegador (via Live Server ou servidor local)
```

> Os usuários de teste são: `admin / 123` e `user / 123`.
