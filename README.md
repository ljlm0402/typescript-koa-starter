<img src='https://github.com/ljlm0402/typescript-koa-starter/raw/images/logo.jpg' border='0' alt='logo' />

[Koa](https://koajs.com/) with [TypeScript's](https://www.npmjs.com/package/typescript) application generator.

<a href="https://www.npmjs.com/package/typescript-koa-starter" target="_blank"><img src="https://img.shields.io/npm/v/typescript-koa-starter.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/typescript-koa-starter" target="_blank"><img src="https://img.shields.io/npm/l/typescript-koa-starter.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/typescript-koa-starter" target="_blank"><img src="https://img.shields.io/npm/dm/typescript-koa-starter.svg" alt="NPM Downloads" /></a>

<br />

## 🤔 What is Koa ?

Create TypeScript Koa Project.

application is configured to use TypeScript instead of plain JavaScript.

## 🧐 What is The package ?

Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable.

## 🚀 Quick Start

### Install with the npm global package

```sh
$ npm install -g typescript-koa-starter
```

### Run npx to install the package

npx is a tool in the JavaScript package management module, npm.

This is a tool that allows you to run the npm package on a single run without installing the package.

If you do not enter a project name, it defaults to _typescript-koa-starter_.

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

