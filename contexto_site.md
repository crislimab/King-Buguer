# 🍔 King Burguer — Contexto Completo do Site

> **Projeto:** King Burguer — Landing Page Artesanal Premium  
> **Data de criação:** 14/03/2026  
> **Framework:** React (Vite)  
> **Linguagem:** JavaScript (JSX) + CSS puro (Vanilla CSS)  

---

## 1. Identidade Visual

### 1.1 Paleta de Cores

| Variável CSS         | Código HEX    | RGB                  | Uso                                      |
|----------------------|---------------|----------------------|------------------------------------------|
| `--bg-color`         | `#0A0A0C`     | rgb(10, 10, 12)      | Fundo principal da página                |
| `--bg-surface`       | `#141418`     | rgb(20, 20, 24)      | Fundo de seções alternadas (Destaques, Diferenciais) |
| `--bg-card`          | `#1A1A20`     | rgb(26, 26, 32)      | Fundo dos cards de produto e diferenciais |
| `--text-primary`     | `#FAFAFA`     | rgb(250, 250, 250)   | Textos principais, títulos               |
| `--text-secondary`   | `#A1A1AA`     | rgb(161, 161, 170)   | Textos descritivos, parágrafos           |
| `--text-muted`       | `#71717A`     | rgb(113, 113, 122)   | Textos terciários (labels, notas)        |
| `--accent`           | `#EA580C`     | rgb(234, 88, 12)     | Cor de destaque principal (laranja)      |
| `--accent-hover`     | `#F97316`     | rgb(249, 115, 22)    | Hover dos botões e elementos interativos |
| `--accent-glow`      | `rgba(234, 88, 12, 0.35)` | —          | Glow/sombra dos botões e efeitos         |
| `--gold`             | `#FFB800`     | rgb(255, 184, 0)     | Estrelas de avaliação                    |
| WhatsApp FAB         | `#25D366`     | rgb(37, 211, 102)    | Botão flutuante do WhatsApp              |

### 1.2 Tipografia

| Fonte            | Provedor      | Pesos utilizados   | Onde é usada                                    |
|------------------|---------------|--------------------|-------------------------------------------------|
| **Bebas Neue**   | Google Fonts  | 400 (Regular)      | Logo, títulos H1/H2/H3, preços, headings footer |
| **Montserrat**   | Google Fonts  | 400, 500, 600, 700 | Body text, subtítulos, botões, badges, nav       |

**Fallbacks:** `system-ui`, `-apple-system`, `sans-serif`

**Link do Google Fonts:**
```
https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap
```

### 1.3 Espaçamentos e Bordas

| Variável       | Valor  | Uso                          |
|----------------|--------|------------------------------|
| `--radius`     | `16px` | Cards, imagens, containers   |
| `--radius-sm`  | `10px` | Badges menores, accent boxes |
| `--transition` | `0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Animações e transições globais |

---

## 2. Estrutura do Site

### 2.1 Seções da Página

```
┌─────────────────────────────────────┐
│  NAVBAR (fixa, glassmorphism)       │
│  Logo | Início | Cardápio | Sobre   │
│  Diferenciais | [Pedir Agora]       │
├─────────────────────────────────────┤
│  HERO SECTION                       │
│  • Badge: "O Verdadeiro Sabor"      │
│  • H1: "A Majestade do Hambúrguer"  │
│  • Subtítulo descritivo             │
│  • CTA WhatsApp                     │
│  • Social Proof (5 estrelas)        │
│  • Background: animação 8 frames    │
│  • Scroll indicator                 │
├─────────────────────────────────────┤
│  DESTAQUES / CARDÁPIO               │
│  • Título: "Os Mais Pedidos"        │
│  • 3 Cards: King Smash | Classic |  │
│    King BBQ                         │
│  • Tags, preços, botão "Pedir"      │
├─────────────────────────────────────┤
│  SOBRE (Nossa História)             │
│  • Grid 2 colunas: imagem + texto   │
│  • Badge "+5 anos de tradição"      │
│  • Stats: 2.500+ | 4.9 | 100%      │
├─────────────────────────────────────┤
│  DIFERENCIAIS                       │
│  • Título: "A Experiência King"     │
│  • 4 Cards: Carne Premium |         │
│    Preparo Artesanal | Entrega      │
│    Rápida | Ingredientes Frescos    │
├─────────────────────────────────────┤
│  CTA FINAL                          │
│  • "Está com fome?"                 │
│  • Botão WhatsApp grande            │
├─────────────────────────────────────┤
│  FOOTER                             │
│  • Logo + Tagline                   │
│  • Horário | Contato | Endereço     │
│  • Copyright 2026                   │
└─────────────────────────────────────┘
│  FAB WhatsApp (flutuante)           │
```

### 2.2 Cardápio (Produtos)

| Produto        | Preço    | Tag            | Descrição                                                                 |
|----------------|----------|----------------|---------------------------------------------------------------------------|
| **King Smash** | R$ 34,90 | 🔥 Mais Vendido | 2x smash carne angus, queijo cheddar, cebola caramelizada, bacon, molho   |
| **King Classic**| R$ 29,90| ⭐ Favorito     | Burger 180g blend da casa, alface, tomate, queijo prato, picles, maionese |
| **King BBQ**   | R$ 39,90 | 🆕 Novidade     | 2x blend 120g, onion rings, bacon defumado, cheddar inglês, molho BBQ     |

### 2.3 Informações de Contato (Footer)

| Campo      | Valor                        |
|------------|------------------------------|
| Horário    | Terça a Domingo, 18h00–23h30 |
| Telefone   | (11) 99999-9999              |
| Instagram  | @kingburguer                 |
| Endereço   | Rua das Delícias, 123 — São Paulo, SP |

---

## 3. Recursos Visuais e Animações

### 3.1 Background do Hero
- **8 frames de imagem** (`.jpg`) animados em sequência
- Ciclo de **12 segundos** — slow motion cinematográfico com crossfade suave (~1.5s por frame)
- **Overlay com gradiente** para legibilidade do texto:
  - Desktop: gradiente horizontal (esquerda escuro → direita transparente)
  - Mobile: gradiente vertical (topo transparente → base escuro)

### 3.2 Efeitos Visuais
| Efeito                | Onde                  | Descrição                                       |
|-----------------------|-----------------------|-------------------------------------------------|
| **Slide-in navbar**   | Navbar ao scrollar    | `position: fixed` + animação `navSlideIn` com `translateY(-100%)` → `0` |
| **Sparks (faíscas)**  | Hero section          | 5 partículas com animação `sparkFloat`          |
| **Glow radial**       | CTA Final             | Brilho laranja suave no fundo da seção          |
| **Pulse**             | FAB WhatsApp          | Pulsação contínua com sombra verde expandindo   |
| **fadeInUp**          | Hero (badge, título, texto, CTA) | Elementos entram de baixo com fade     |
| **Scroll indicator**  | Base do hero          | Linha vertical animada com pulso                |
| **Shimmer**           | Botões primários      | Brilho horizontal ao hover (`::after`)          |
| **Card hover**        | Cards de produto      | `translateY(-8px)` + glow laranja               |
| **Image zoom**        | Cards de produto      | `scale(1.08)` na imagem ao hover                |
| **Hamburger → X**     | Menu mobile           | Transição animada das 3 linhas em X             |

### 3.3 Duração das Animações
| Animação        | Duração  | Tipo              |
|-----------------|----------|--------------------|
| Frame animation | 12s      | infinite, ease-in-out (crossfade ~240ms) |
| Spark float     | 3.5–6s   | infinite, ease     |
| Scroll pulse    | 2s       | infinite, ease     |
| FAB pulse       | 3s       | infinite, ease     |
| fadeInUp         | 0.8s     | ease-out, com delays escalonados |
| Transição geral | 0.35s    | cubic-bezier(0.25, 0.46, 0.45, 0.94) |

---

## 4. Responsividade

### 4.1 Breakpoints

| Breakpoint   | Comportamento                                                     |
|--------------|-------------------------------------------------------------------|
| **> 860px**  | Desktop — grid 2/3/4 colunas, navbar horizontal, hero lado a lado |
| **≤ 860px**  | Tablet — menu hamburger, cards empilhados, hero centralizado      |
| **≤ 480px**  | Mobile — tudo em 1 coluna, fontes menores, padding reduzido       |

### 4.2 Adaptações por Breakpoint

**Desktop (> 860px):**
- Navbar com links visíveis + botão "Pedir Agora" (absolute no hero, fixed ao scrollar)
- Hero: texto à esquerda, imagem de fundo full-width com animação slow-motion 12s
- Cardápio: grid 3 colunas
- Sobre: grid 2 colunas (imagem + texto)
- Diferenciais: grid 4 colunas
- Footer: grid 4 colunas

**Tablet (≤ 860px):**
- Navbar: hamburger menu com slide-in lateral
- Hero: conteúdo centralizado, overlay vertical
- Cardápio: 1 coluna (max-width: 500px)
- Sobre: 1 coluna
- Diferenciais: 2 colunas
- Footer: 2 colunas

**Mobile (≤ 480px):**
- Títulos menores (hero: 3rem, seções: 2.6rem)
- Diferenciais: 1 coluna
- Footer: 1 coluna centralizado
- FAB: 52px (menor)

---

## 5. SEO e Acessibilidade

### 5.1 Meta Tags
```html
<title>King Burguer | Hambúrguer Artesanal Premium</title>
<meta name="description" content="King Burguer - A Majestade do Hambúrguer Artesanal. Suculento, premium e feito para reis. Peça agora pelo WhatsApp e receba em casa!" />
<meta name="theme-color" content="#0A0A0C" />
<meta property="og:title" content="King Burguer | Hambúrguer Artesanal Premium" />
<meta property="og:description" content="Suculento, premium e feito para reis. Experimente a combinação perfeita de carne nobre, pão fresco e ingredientes selecionados." />
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />
```

### 5.2 Acessibilidade
- `aria-label` em botões interativos (menu, WhatsApp, navegação)
- `aria-expanded` no botão hamburger
- `aria-hidden="true"` em elementos decorativos (sparks, scroll indicator, ícones SVG)
- `alt` descritivo em todas as imagens de conteúdo
- `loading="lazy"` em imagens abaixo da dobra
- HTML semântico: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## 6. Arquivos do Projeto

```
Hamburgueria_King/
├── Imagens/                        # Frames da animação do hero
│   ├── ezgif-frame-001.jpg
│   ├── ezgif-frame-002.jpg
│   ├── ...
│   └── ezgif-frame-008.jpg
├── react-app/                      # Aplicação React (Vite)
│   ├── index.html                  # HTML base + SEO + Google Fonts
│   ├── package.json                # Dependências (react, react-dom, vite)
│   ├── vite.config.js              # Configuração do Vite
│   ├── public/
│   │   └── Imagens/                # Cópia das imagens para o servidor Vite
│   └── src/
│       ├── main.jsx                # Entry point (StrictMode + ReactDOM)
│       ├── index.css               # Reset global + variáveis CSS
│       ├── App.jsx                 # Componente principal (todas as seções)
│       └── App.css                 # Estilos completos (1.100+ linhas)
├── index.html                      # Versão original (HTML puro, sem React)
├── style.css                       # CSS da versão original
└── contexto_site.md                # Este arquivo de contexto
```

---

## 7. Decisões de Design

### Por que essas fontes?
- **Bebas Neue** — Fonte display condensada, bold por natureza, transmite força e impacto. Perfeita para headline de marca de hambúrguer artesanal. O estilo uppercase reforça a ideia de "majestade/realeza".
- **Montserrat** — Sans-serif geométrica, extremamente legível em telas. Complementa a Bebas Neue com elegância sem competir. Os pesos 400–700 cobrem todas as necessidades de body text e UI.

### Por que essas cores?
- **Fundo escuro (#0A0A0C)** — Dark mode premium que remete a ambientes de restaurantes sofisticados. Aumenta o contraste com as imagens dos hambúrgueres.
- **Laranja (#EA580C)** — Cor que remete a fogo, grelha e calor. Estimula o apetite (psicologia das cores em food delivery). Alta energia sem ser agressiva.
- **Dourado (#FFB800)** — Usado exclusivamente nas estrelas de avaliação, reforça a ideia de "King" (realeza, prêmio, qualidade).

### Por que React + Vite?
- **Vite** oferece hot reload instantâneo, build otimizado e setup mínimo.
- **React** permite componentização futura (menu expandido, carrinho, etc.) sem reescrever a base.
- **CSS puro** — Controle total sobre o design sem dependências de frameworks CSS.

---

*Documento gerado em 14/03/2026 — King Burguer © 2026*
