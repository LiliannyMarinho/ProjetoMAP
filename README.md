# ProjetoMAP

ProjetoMAP é uma aplicação web para um petshop, desenvolvida utilizando React no frontend com Vite e Node.js no backend. A aplicação segue o padrão de desenvolvimento de cadeia de responsabilidade.

## Estrutura do Projeto

```plaintext
ProjetoMAP/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── vite.config.js
│   ├── index.html
│   ├── package.json
│   └── .env
├── README.md
└── .gitignore
```

## Requisitos

- Node.js v21.7.2
- MongoDB

## Instalação

### Backend

1. Navegue para o diretório do backend:
   ```sh
   cd ProjetoMAP/backend
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do diretório `backend` com o seguinte conteúdo:
   ```plaintext
   PORT=3001
   MONGO_URI=mongodb://localhost:27017/projetomap
   ```

4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

### Frontend

1. Navegue para o diretório do frontend:
   ```sh
   cd ProjetoMAP/frontend
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do diretório `frontend` com o seguinte conteúdo:
   ```plaintext
   VITE_API_URL=http://localhost:3001
   ```

4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## Estrutura de Pastas

### Backend

- `controllers/`: Contém os controladores da aplicação.
- `middleware/`: Contém os middlewares da aplicação.
- `models/`: Contém os modelos do Mongoose.
- `routes/`: Contém as definições de rotas.
- `services/`: Contém a lógica de negócios.
- `app.js`: Configurações do aplicativo Express.
- `server.js`: Inicializa o servidor.

### Frontend

- `components/`: Contém os componentes reutilizáveis do React.
- `pages/`: Contém as páginas da aplicação.
- `services/`: Contém a lógica de chamadas à API.
- `App.jsx`: Componente principal da aplicação.
- `main.jsx`: Ponto de entrada da aplicação React.
- `vite.config.js`: Configurações do Vite.

## Utilização

Após iniciar tanto o backend quanto o frontend, a aplicação estará disponível em [http://localhost:3000](http://localhost:3000). O backend estará rodando em [http://localhost:3001](http://localhost:3001) e servirá as APIs necessárias para a aplicação frontend.

## Funcionalidades

- Listar todos os pets.
- Adicionar um novo pet.

## Contribuição

Se você deseja contribuir para o desenvolvimento deste projeto, siga as instruções abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

### Licença (Opcional)

Se você quiser adicionar uma licença ao projeto, crie um arquivo `LICENSE` na raiz do repositório com o conteúdo da licença que você escolher, como a Licença MIT.

### Arquivo `.gitignore`

Certifique-se de que o arquivo `.gitignore` inclua as seguintes linhas:

```plaintext
node_modules
.env
dist
```