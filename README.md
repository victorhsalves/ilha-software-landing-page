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

## Versionamento

Este projeto possui três branches principais:
- _main_ => Produção
- _staging_ => Homologação
- _develop_ => Desenvolvimento

A branch _main_ é travada para _pushes_, e deve receber merge da _staging_ somente através de aprovação de _pull requests_.

Os commits devem seguir a convenção [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para manter um padrão prático auxiliando na colaboração:

- _feat_: .... => Inclusão de nova funcionalidade
- _fix_: ... => Correção de bug
- _style_: ... => Mudança no estilo
- _build_: ... => Mudança em arquivos de build
- _temp_: ... => Commit temporário que não leva alteração finalizada na aplicação
- _chore_: ... => Mudanças imperceptíveis para usuário mas que devem ser registradas

Dessa forma também deve ser feita a atualização da versão do código utilizando [Semantic Versioning](https://semver.org/):
```bash
npm version major ## Para mudanças majoritárias (com breaking changes) 1.x.x
# ou
npm version minor ## Para mudanças menores (sem breaking changes) x.1.x
# ou
npm version patch ## Para correção de bugs (sem breaking changes) x.x.1
```

## Arquitetura

- public/ (Arquivos públicos, aqui devem ficar as imagens)
- src/
  - @types/ (Tipagens globais)
  - assets/ (Estilização global e itens utilizados)
  - components/
    - common/ (Componentes comumente utilizados nas páginas)
      - _*página*_/
        - components/ (Components específicos da página)
        - hooks/ (Hooks utilizados pelos components da página)
    - ui/ (Componentes de UI como _inputs_)
  - constantes/ (Constantes utilizadas)
  - helpers/ (Métodos de auxílio, Ex.: máscaras, formatadores, etc...)
  - hooks/ (Hooks globais)
  - infra/
    - gateway/ (Criação das requisições à API)
    - http/ (Criação dos métodos HTTP customizados)
  - layouts/ (Layouts utilizados dentro da aplicação)
  - pages/ (Páginas da aplicação, aqui é feito o roteamento do Next, consultar [documentação](https://nextjs.org/docs))
  - theme/ (Arquivo contendo estilização)
