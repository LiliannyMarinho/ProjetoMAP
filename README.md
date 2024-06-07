# ProjetoMAP

## Descrição

ProjetoMAP é um aplicativo de petshop desenvolvido utilizando Vite com React no front-end e Node.js com PostgreSQL no back-end. O projeto segue o padrão de desenvolvimento cadeia de responsabilidade.

## Estrutura do Projeto

```
ProjetoMAP/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── config/
│   │   └── db.js
│   ├── app.js
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── .gitignore
├── README.md
└── package.json
```

## Configuração do Banco de Dados

O banco de dados utilizado é o PostgreSQL. As tabelas são criadas conforme o script SQL fornecido na pasta `backend/models`.

## Instalação

### Backend

1. Navegue até a pasta `backend`:
    ```bash
    cd backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados PostgreSQL no arquivo `config/db.js`.

4. Inicie o servidor:
    ```bash
    npm start
    ```

### Frontend

1. Navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o projeto:
    ```bash
    npm run dev
    ```

## Endpoints

### Clientes

- `GET /api/clientes` - Retorna a lista de clientes.
- `POST /api/clientes` - Adiciona um novo cliente.

## Estrutura de Dados

### Cliente

- `IDCliente` - Identificador único do cliente.
- `Nome` - Nome do cliente.
- `CPF` - CPF do cliente.
- `Endereco` - Endereço do cliente (tipo composto).
- `Telefone` - Telefone do cliente.
- `Email` - Email do cliente.

## License

Este projeto está licenciado sob os termos da licença MIT.