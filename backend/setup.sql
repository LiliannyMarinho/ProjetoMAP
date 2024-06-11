-- Criar o tipo composto 
CREATE TYPE IF NOT EXISTS ENDERECO AS (
    Rua VARCHAR(100),
    Bairro VARCHAR(50),
    Cidade VARCHAR(50),
    Estado CHAR(2),
    CEP CHAR(8)
);

-- CLIENTE table
CREATE TABLE IF NOT EXISTS CLIENTE (
  IDCliente INT PRIMARY KEY UNIQUE NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  CPF VARCHAR(11) UNIQUE NOT NULL,
  Endereco ENDERECO NOT NULL,
  Telefone VARCHAR(15) NOT NULL,
  Email VARCHAR(100) NOT NULL
);

-- ANIMAL table
CREATE TABLE IF NOT EXISTS ANIMAL (
  IDAnimal INT PRIMARY KEY UNIQUE NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  Especie VARCHAR(50),
  Raca VARCHAR(50),
  Idade INT,
  Sexo CHAR(1) NOT NULL,
  ClienteID INT NOT NULL,
  FOREIGN KEY (ClienteID) REFERENCES CLIENTE(IDCliente) ON DELETE CASCADE
);

-- FUNCIONARIO table
CREATE TABLE IF NOT EXISTS FUNCIONARIO (
  IDFuncionario INT PRIMARY KEY UNIQUE NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  CPF VARCHAR(11) UNIQUE NOT NULL,
  Cargo VARCHAR(50) NOT NULL,
  Telefone VARCHAR(15) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Salario DECIMAL(10, 2) NOT NULL
);

-- ATIVIDADE table
CREATE TABLE IF NOT EXISTS ATIVIDADE (
  IDAtividade INT PRIMARY KEY UNIQUE NOT NULL,
  Descricao VARCHAR(200) NOT NULL,
  Data DATE NOT NULL,
  Hora TIME NOT NULL,
  Valor DECIMAL(10, 2) NOT NULL
);

-- PRODUTO table
CREATE TABLE IF NOT EXISTS PRODUTO (
  IDProduto INT PRIMARY KEY UNIQUE NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  Descricao VARCHAR(200),
  Preco DECIMAL(10, 2) NOT NULL,
  Estoque INT NOT NULL
);

-- ADQUIRE table
CREATE TABLE IF NOT EXISTS ADQUIRE (
  ClienteID INT NOT NULL,
  ProdutoID INT NOT NULL,
  Quantidade INT NOT NULL,
  DataCompra DATE NOT NULL,
  PRIMARY KEY (ClienteID, ProdutoID),
  FOREIGN KEY (ClienteID) REFERENCES CLIENTE(IDCliente) ON DELETE CASCADE,
  FOREIGN KEY (ProdutoID) REFERENCES PRODUTO(IDProduto) ON DELETE CASCADE
);

-- VETERINARIO table
CREATE TABLE IF NOT EXISTS VETERINARIO (
  IDVeterinario INT PRIMARY KEY UNIQUE NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  CPF VARCHAR(11) UNIQUE NOT NULL,
  Telefone VARCHAR(15) NOT NULL,
  Endereco ENDERECO NOT NULL,
  Especialidade VARCHAR(50)
);

-- TRATA table
CREATE TABLE IF NOT EXISTS TRATA (
  VeterinarioID INT NOT NULL,
  AnimalID INT NOT NULL,
  DataTratamento DATE NOT NULL,
  Tratamento VARCHAR(200) NOT NULL,
  PRIMARY KEY (VeterinarioID, AnimalID, DataTratamento),
  FOREIGN KEY (VeterinarioID) REFERENCES VETERINARIO(IDVeterinario) ON DELETE CASCADE,
  FOREIGN KEY (AnimalID) REFERENCES ANIMAL(IDAnimal) ON DELETE CASCADE
);

-- VENDAS table
CREATE TABLE IF NOT EXISTS VENDAS (
  IDVenda INT PRIMARY KEY UNIQUE NOT NULL,
  ClienteID INT NOT NULL,
  DataVenda DATE NOT NULL,
  Total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (ClienteID) REFERENCES CLIENTE(IDCliente) ON DELETE CASCADE
);

-- CONTEM table
CREATE TABLE IF NOT EXISTS CONTEM (
  VendaID INT NOT NULL,
  ProdutoID INT NOT NULL,
  Quantidade INT NOT NULL,
  PRIMARY KEY (VendaID, ProdutoID),
  FOREIGN KEY (VendaID) REFERENCES VENDAS(IDVenda) ON DELETE CASCADE,
  FOREIGN KEY (ProdutoID) REFERENCES PRODUTO(IDProduto) ON DELETE CASCADE
);

-- CONSULTA table
CREATE TABLE IF NOT EXISTS CONSULTA (
  IDConsulta INT PRIMARY KEY UNIQUE NOT NULL,
  VeterinarioID INT NOT NULL,
  AnimalID INT NOT NULL,
  DataConsulta DATE NOT NULL,
  Diagnostico VARCHAR(200) NOT NULL,
  Tratamento VARCHAR(200) NOT NULL,
  FOREIGN KEY (VeterinarioID) REFERENCES VETERINARIO(IDVeterinario) ON DELETE CASCADE,
  FOREIGN KEY (AnimalID) REFERENCES ANIMAL(IDAnimal) ON DELETE CASCADE
);

-- FORNECEDOR table
CREATE TABLE IF NOT EXISTS FORNECEDOR (
  IDFornecedor INT PRIMARY KEY UNIQUE NOT NULL,
  Nome VARCHAR(100) NOT NULL,
  Telefone VARCHAR(15) NOT NULL,
  Endereco ENDERECO NOT NULL,
  CNPJ VARCHAR(14) UNIQUE NOT NULL
);

-- OFERECE table
CREATE TABLE IF NOT EXISTS OFERECE (
  FornecedorID INT NOT NULL,
  ProdutoID INT NOT NULL,
  Preco DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (FornecedorID, ProdutoID),
  FOREIGN KEY (FornecedorID) REFERENCES FORNECEDOR(IDFornecedor) ON DELETE CASCADE,
  FOREIGN KEY (ProdutoID) REFERENCES PRODUTO(IDProduto) ON DELETE CASCADE
);