# ProjetoMAP

ProjetoMAP é um aplicativo de petshop desenvolvido utilizando Vite, React, Typescript e Axios no frontend e Node.js com PostgreSQL no backend. O projeto segue o padrão de desenvolvimento cadeia de responsabilidade, MVC, utilizando o padrão de desenvolvimento cliente-servidor.

## Estrutura do Projeto

```
ProjetoMAP/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── adquire.js
│   │   ├── animal.js
│   │   ├── cliente.js
│   │   ├── consulta.js
│   │   ├── contem.js
│   │   ├── fornecedor.js
│   │   ├── oferece.js
│   │   ├── produto.js
│   │   ├── trata.js
│   │   ├── vendas.js
│   │   └── veterinario.js
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── setup.sql
│   └── setupDatabase.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── logo/
│   │   ├── components/
│   │   │   ├── Contato.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Main.tsx
│   │   │   ├── Menu.tsx
│   │   │   ├── Nav.tsx
│   │   │   ├── Produto.tsx
│   │   │   ├── Servico.tsx
│   │   │   └── Sobre.tsx
│   │   ├── handlers/
│   │   │   ├── AbstractHandler.ts
│   │   │   ├── LogoHandler.ts
│   │   │   ├── MenuHandler.ts
│   │   │   └── NavHandler.ts
│   │   ├── services/
│   │   │   └── ApiService.ts
│   │   ├── styles/
│   │   │   ├── about.css
│   │   │   ├── contato.css
│   │   │   ├── footer.css
│   │   │   ├── header.css
│   │   │   ├── home.css
│   │   │   ├── index.css
│   │   │   ├── main.css
│   │   │   ├── menu.css
│   │   │   ├── nav.css
│   │   │   ├── produto.css
│   │   │   └── servico.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── package.json
└── README.md
```

## Tecnologias Utilizadas

- **Frontend**: Vite, React, TypeScript, Axios
- **Backend**: Node.js, PostgreSQL

## Padrões de Desenvolvimento

- **Padrão Cadeia de Responsabilidade**
- **MVC (Model-View-Controller)**
- **Cliente-Servidor**

## Instalação e Execução

### Backend

1. Navegue até o diretório `backend`:
   ```bash
   cd backend
   ```

2. Configure as variáveis de ambiente no arquivo `.env`.
    ```text
    DB_USER=user
    DB_HOST=host
    DB_DATABASE=bank
    DB_PASSWORD=pass
    DB_PORT=5432
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

### Frontend

1. Navegue até o diretório `frontend`:
   ```bash
   cd frontend
   ```
   
2. Instale as dependências:
   ```bash
   npm install
   ```
   
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Estrutura de Diretórios

- **backend/config**: Configurações de banco de dados.
- **backend/routes**: Definições de rotas da API.
- **frontend/src/assets**: Imagens e logos.
- **frontend/src/components**: Componentes React.
- **frontend/src/handlers**: Handlers para a lógica de negócios.
- **frontend/src/services**: Serviços para chamadas à API.
- **frontend/src/styles**: Arquivos CSS.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
