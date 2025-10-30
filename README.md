<h1>🧩 Coder-mocks</h1>

<h2>📖 Sobre o Projeto</h2>

O coder-mocks é um servidor simples de mock de dados desenvolvido em Node.js, ideal para desenvolvedores que desejam simular APIs durante o desenvolvimento de front-end, testes ou estudos de lógica e backend.

Com ele, você pode criar endpoints falsos que retornam dados estáticos (ou dinâmicos), sem depender de um servidor real ou banco de dados.

<h2>🚀 Funcionalidades</h2>

✅ Servidor local simples para simular APIs REST
✅ Endpoints configuráveis para diferentes recursos
✅ Dados retornados em formato JSON
✅ Ideal para protótipos, estudos e testes de integração
✅ Fácil de expandir e personalizar

<h2>🧠 Tecnologias Utilizadas</h2>

- Node.js
- Express
- Nodemon (para hot reload em desenvolvimento)

<h2>⚙️ Instalação</h2>
1️⃣ Clone o repositório
git clone https://github.com/otosales/coder-mocks.git
cd coder-mocks

2️⃣ Instale as dependências
npm install

3️⃣ Inicie o servidor
npm start


O servidor iniciará por padrão em http://localhost:3000
 (ou na porta definida no código).

<h2>🌐 Exemplos de Endpoints</h2>
Método	Endpoint	Descrição
GET	/api/users	Retorna lista de usuários mock
GET	/api/posts	Retorna lista de posts mock
GET	/api/users/:id	Retorna um usuário específico
POST	/api/users	Adiciona um novo usuário (mock)

Os dados retornados podem ser facilmente modificados dentro da pasta project/.

<h2>🧰 Scripts Disponíveis</h2>
Comando	Ação
npm start	Inicia o servidor de mock
npm run dev	Inicia o servidor com nodemon (recarrega automaticamente)
🧪 Testando com o Postman / Insomnia

Inicie o servidor com npm start

Abra o Postman ou Insomnia

Faça uma requisição para:

GET http://localhost:3000/api/users


Você verá o retorno JSON com os dados simulados.
 
