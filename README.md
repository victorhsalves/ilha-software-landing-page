Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Inicialização

Instalação de dependências:
```bash
npm i
```

Inicializando o servidor de desenvolvimento:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador para acessar a aplicação.

## Arquitetura

- src/
  - @types/ (Tipagens globais)
  - assets/ (Estilização global e itens utilizados)
  - components/
    - common/ (Componentes comumente utilizados nas páginas)
      - _*página*_/
        - components/ (Components específicos da página)
        - hooks/ (Hooks utilizados pelos components)
    - ui/ (Componentes de UI como _inputs_)
  - constantes/ (Constantes utilizadas)
  - helpers/ (Métodos de auxílio, Ex.: máscaras, formatadores, etc...)
  - infra/
    - gateway/ (Criação das requisições à API)
    - http/ (Criação dos métodos HTTP customizados)
  - layouts/ (Layouts utilizados dentro da aplicação)
  - pages/ (Páginas da aplicação, aqui é feito o roteamento do Next, consultar [documentação](https://nextjs.org/docs))
  - theme/ (Arquivo contendo estilização)
