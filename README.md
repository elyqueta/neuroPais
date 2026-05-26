# NeuroPais

Apoio prático e empático para pais e cuidadores de crianças com autismo e atraso na fala. Feito com carinho em Angola, para o mundo lusófono.

## Desenvolvimento local

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação

```bash
npm install
```

### Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Acede em: http://localhost:5173

### Build para produção

```bash
npm run build
```

### Pré-visualizar build

```bash
npm run preview
```

---

## Deploy no Vercel

### Opção 1 — Via CLI

```bash
npm i -g vercel
vercel
```

### Opção 2 — Via GitHub

1. Faz push do projecto para um repositório GitHub
2. Vai a https://vercel.com/new
3. Importa o repositório
4. Deixa as configurações padrão (Vercel detecta Vite automaticamente)
5. Clica em **Deploy**

### Configuração automática

O ficheiro `vercel.json` já está configurado para gerir as rotas SPA corretamente.

---

## Estrutura do projecto

```
neuropais/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Avaliacao.jsx
│   │   ├── Atividades.jsx
│   │   ├── Biblioteca.jsx
│   │   └── Especialistas.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

## Stack técnica

- **React 18** + **React Router 6**
- **Vite 5** (bundler)
- **Tailwind CSS 3** (estilos utilitários)
- **Lucide React** (ícones)
- **Google Fonts** — Lora + Inter

---

© 2026 NeuroPais. Feito com ❤️ em Luanda.
