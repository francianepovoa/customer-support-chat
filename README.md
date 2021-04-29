<h2 align="center">
  <img src="./public/images/send.png">
  Customer support chat 
</h2>

<p align="center">

<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/francianepovoa/customer-support-chat?style=plastic">

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/francianepovoa/customer-support-chat?style=plastic">

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/francianepovoa/customer-support-chat?style=plastic">

<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/francianepovoa/customer-support-chat?style=plastic">

<p align="center"> 
  <a href="#-Technologies">Technologies</a>&nbsp;|&nbsp;
  <a href="#-Getting-started"> Getting Started</a>&nbsp;|&nbsp
  <a href="#-how-to-contribute">How To Contribute</a>&nbsp;|&nbsp;
</p>

## 👨🏻‍💻 About the project

Chat is an API for customer service in real-time.
It is an application that creates a call (message) from the user to the support, where the messages are answered in real-time and saved in a database in case the user wants to return to the subject addressed(diagram).

<img alt="Diagram" src=":/../public/images/db%20table.png" width="550px" height="300px"  />

Using Typescript and Express for route management, TypeORM for data manipulation and Websocket for a persistent connection between a client and server.
This is a project developed during the [Next Level Week](https://nextlevelweek.com/inscricao/5), presented by [@Rocketseat](https://rocketseat.com.br/) during April 19-25, 2021.


## 🚀 Technologies
<h1 align="center">
	<img alt="Project Screenshots" src=":/../public/images/home.gif" />
</h1>

Technologies that I used to develop this frontend app

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite](https://www.sqlite.org/index.html)
- [socket.io](https://socket.io/)
- [VS Code](https://code.visualstudio.com) with [ESLInt](https://eslint.org/docs/user-guide/getting-started), and [Prettier RC](https://github.com/prettier/prettier)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash

$ git clone https://github.com/francianepovoa/customer-support-chat

$ cd customer-support-chat


```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Run the web app
$ yarn dev

#The application can be accessed at 
$ http://localhost:3333
```
**File database.sqlite**

If you don't already have the ``database.sqlite`` file inside the ``src / database`` folder, create this file, and run ``yarn typeorm migration: run`` to create the database tables.

## 🤔 How to contribute

**Follow the steps below**

```bash
# Clone your fork
$ git clone https://github.com/francianepovoa/customer-support-chat

$ cd customer-support-chat

# Create a branch with your feature
$ git checkout -b your-feature

# Make the commit with your changes
$ git commit -m 'feat: Your new feature'

# Send the code to your remote branch
$ git push origin your-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is under the MIT license. See the [LICENSE](https://github.com/francianepovoa/customer-support-chat/blob/main/LICENSE) for more information.

Made with ♥ by Franciane Póvoa :wave: [Get in touch!](https://github.com/francianepovoa) 
