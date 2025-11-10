# Projeto Contatos

Nome do projeto: Projeto Contatos (Ionic + Firebase)

Objetivo do app
-----------------
Aplicativo de exemplo para gerenciar contatos. Demonstra:

- Controle de versão com Git
- Criação de componentes e páginas no Ionic
- Consumo de API RESTful (jsonplaceholder)
- CRUD (adicionar/listar) com Firebase Realtime Database
- Geração de build para produção

Tecnologias utilizadas
----------------------

- Ionic + Angular (standalone components)
- Firebase (Realtime Database) — SDK modular
- TypeScript, HTML, SCSS

Instruções de setup
--------------------

1. Instale dependências

```bash
npm install
```

2. Firebase

- Crie um projeto no Firebase e habilite o Realtime Database.
- No console do Firebase, copie as chaves de configuração do seu projeto.
- No arquivo `src/app/services/firebase.service.ts` substitua o objeto `firebaseConfig` pelos valores do seu projeto.

3. Rodar em desenvolvimento

```bash
npm run start
```

4. Gerar build de produção

```bash
npm run build
```

Observações e evidências
-----------------------

- Commits: os commits devem estar presentes no histórico Git (ver `git log`).
- Consumo da API: a página `Listar Contatos` consome `https://jsonplaceholder.typicode.com/users`.
- Integração com Firebase: `src/app/services/firebase.service.ts` contém funções para adicionar e listar contatos (substitua as chaves config).
- Build: após `npm run build` a pasta `www/` será gerada com a versão de produção.

Como subir para o GitHub
-----------------------

1. Crie um repositório no GitHub.
2. Adicione o remoto e dê push:

```bash
git remote add origin <URL_DO_REPO>
git branch -M main
git push -u origin main
```

Se quiser, me passe a URL do repo e eu adiciono o remote e faço o push final por você (não posso criar repo no seu GitHub sem acesso).
