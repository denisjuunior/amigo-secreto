# Casca PWA do Amigo Secreto (GitHub Pages)

Instala o seu web app do Apps Script no celular, em tela cheia, com ícone limpo
(no Android vira um WebAPK de verdade, sem a barrinha do navegador).

## Como funciona
A casca é um site estático no GitHub Pages (HTTPS grátis). Ela carrega o seu
app do Apps Script dentro de um `<iframe>` que ocupa a tela toda. Como a casca
fica na origem do GitHub Pages (com `manifest` e service worker), o Android
consegue instalar como app nativo. O app continua rodando no Apps Script.

## Arquivos (os "4" + ícones)
- `index.html` — a casca (iframe + tela de entrada do link)
- `manifest.webmanifest` — nome, cores e ícones do app
- `sw.js` — service worker (deixa instalável e abre rápido)
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon-180.png` — ícones

> Se um dia você trocar a URL `/exec` da implantação, edite a linha `APP_URL`
> no topo do `<script>` do `index.html`.

## Publicar no GitHub Pages (uma vez)
1. Crie um repositório **público** no GitHub, ex.: `amigo-secreto`.
2. Suba **todos os arquivos desta pasta** na raiz do repositório
   (pelo site do GitHub: "Add file → Upload files", ou `git push`).
3. No repositório: **Settings → Pages**.
   - **Source: Deploy from a branch**
   - **Branch: main** e **/ (root)** → **Save**.
4. Espere ~1 minuto. O endereço fica:
   `https://SEU-USUARIO.github.io/amigo-secreto/`

Confira abrindo esse endereço no navegador: deve aparecer a tela "Amigo Secreto"
pedindo o link.

## Como a família instala
Cada pessoa tem um link pessoal (`...?t=TOKEN`). Dois caminhos:

**A) Mais simples (recomendado):** mande o link da casca com o token, assim:
`https://SEU-USUARIO.github.io/amigo-secreto/?t=TOKEN`
(é só trocar o começo: em vez do `.../exec?t=TOKEN`, use o endereço do Pages
com o mesmo `?t=TOKEN`). A pessoa abre, o app já entra, e ela instala.

**B) Pelo app:** a pessoa abre `https://SEU-USUARIO.github.io/amigo-secreto/`,
cola o link que recebeu no WhatsApp e toca em Entrar. Fica salvo no aparelho.

Para o painel do organizador: `https://SEU-USUARIO.github.io/amigo-secreto/?p=admin`.

### Instalar em tela cheia
- **Android (Chrome / Samsung Internet):** abra o endereço → menu (⋮) →
  **Instalar aplicativo** / **Adicionar à tela inicial**. Vira ícone limpo,
  abre em tela cheia, sem barra do navegador.
- **iPhone (Safari):** abra no **Safari** → botão Compartilhar →
  **Adicionar à Tela de Início**. Abre em tela cheia com o ícone.
  (No iPhone tem que ser pelo Safari; Chrome no iOS não instala.)

## Trocar de pessoa no mesmo aparelho
Abra o endereço com `?novo` no fim, ex.:
`https://SEU-USUARIO.github.io/amigo-secreto/?novo`
Isso esquece o link salvo e pede outro.

## Observações
- O link pessoal fica guardado **no aparelho** (não é exposto a ninguém).
- No iPhone, a câmera para a foto pode pedir para abrir no Safari em alguns
  casos; se a foto travar no app instalado, faça esse passo pelo Safari.
- A casca não guarda dados do sorteio — tudo continua no seu Apps Script/planilha.
