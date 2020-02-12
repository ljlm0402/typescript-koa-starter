<img src='https://github.com/ljlm0402/typescript-koa-starter/raw/images/logo.jpg' border='0' alt='logo' />

[Koa](https://koajs.com/) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

<a href="https://www.npmjs.com/package/typescript-koa-starter" target="_blank"><img src="https://img.shields.io/npm/v/typescript-koa-starter.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/typescript-koa-starter" target="_blank"><img src="https://img.shields.io/npm/l/typescript-koa-starter.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/typescript-koa-starter" target="_blank"><img src="https://img.shields.io/npm/dm/typescript-koa-starter.svg" alt="NPM Downloads" /></a>

<br />

## 🧐 What is it?

Creates a new typescript koa application.
application is configured to use TypeScript instead of plain JavaScript. 

## 🤔 Why typescript-koa-starter?

Node Js is great for the rapid development of web-projects, but is often neglected because of the lack of
type safety. TypeScript solves this issue and (along with its linter file) can even make your code
more robust than some other static languages like Java.

## ⚙️ Installation

```sh
$ npm install -g typescript-koa-starter
```

## 🚀 Quick Start

The quickest way to get started is use npx and pass in the name of the project you want to create.
If you don't specify a project name, the default _typescript-koa-starter_ will be used instead.

### 1. Create the app

```bash
$ npx typescript-koa-starter "project name"
```

Choose the template you want. We will create more templates later.

Start your typescript-koa-starter app in development mode at `http://localhost:3000/`

```bash
$ cd "project name" && npm run start
```

## 🎠 Available commands for the server.

- Run the Server in production mode : `npm run start`.
- Run the Server in development mode : `npm run dev`.
- Run all unit-tests: `npm run test`.
- Check for linting errors: `npm run lint`.

You may need to install [nodemon](https://www.npmjs.com/package/nodemon) separately if you do not currently have it installed on your machine.

## ⛑ Code Structure (default)

```bash
│
├── /src
│   ├── /controllers
│   │   ├── index.controller.ts
│   │   └── users.controller.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .gitignore
├── jest.config.js
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 💳 License

[MIT](LICENSE)

## 🤝 Contributors

