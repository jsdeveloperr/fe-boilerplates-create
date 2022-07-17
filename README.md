# 📦 Frontend Boilerplates Create

> CLI for creating reusable, modern React, Preact, Vue, Svelte and Nextjs libraries


<div align="center">

[![npm](https://img.shields.io/npm/v/fe-boilerplates-create?style=flat-square)](https://www.npmjs.com/package/fe-boilerplates-create)
![npm](https://img.shields.io/npm/dt/fe-boilerplates-create?style=flat-square)
![GitHub license](https://img.shields.io/npm/l/fe-boilerplates-create?style=flat-square)

</div>

## :rocket: setup

<p align="center">
  <img width="500" src="https://github.com/jsdeveloperr/fe-boilerplates-create/blob/master/setup.gif">
</p>

## 🚀 Features 

- A modern and easy to use CLI
- Rapid development of the component
- Generates modern JS feature files
- [Webpack](https://webpack.js.org/) for bundling
- [Babel](https://babeljs.io/) for transpiling
- Optional support for TypeScript
- Sourcemap creation
- Publish github pages with one command
- Easy to build and test your component with the example template

## How is it different from the other library CLI?

- It is using latest version of webpack. Currently, other CLI's are using rollup.
- Development is fast here because we are not directly consuming the component. First we are building it peacefully, and once it is ready then we do `npm pack` to test in our local environment

## Install globally

```bash
npm install -g fe-boilerplates-create
```

or

```bash
npx fe-boilerplates-create
```

## Development

```bash
fe-boilerplates-create
```

Once you run the CLI, you will be asked to answer few questions. Complete the steps and you should have a react project with an example component.

If you are using `npm`

```bash
npm run dev
```

else

```bash
yarn dev
```

You will have a example component running in the browser. You can start developing your component here by adding some Javscript and CSS.


<p align="center" dir="auto">
    <img src="https://github.com/jsdeveloperr/fe-boilerplates-create/blob/master/user.png" width="200" alt="frontend boilerplates" style="max-width: 100%;"> 
</p>