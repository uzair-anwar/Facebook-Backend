# Facebook Clone

## Project Overview

In this project, we have some features like accounts, posts. Users can create an account and log in lately. They can see other's posts and also create a post. They can also edit or delete their post. They can also a post in draft. They can edit or delete or publish them as well.

## Version

Version 1.0

## Why do we use it?

We use this for making posts, It's looks like a social application.

## Features

#### Accounts:

The user can create his account by giving his name, email and password. Then by using his email or password, he can log into the application.

#### Posts:

Users can see all the posts which include his or other users' posts. And he can create a new post, update and delete his post.

#### Draft:

Users can save a post in draft, and they can also comment on a post, edit their comments or delete them.

#### See all posts:

An unauthorized user only see posts; He can't update or delete a post. He can't comment on any post.

## Built with (languages)

    JavaScript
    Node
    Express
    MySQL
    
## Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- Install [NPM](https://www.npmjs.com/)
- Install [MySQL](https://www.mysql.com/)

### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

## Installation and Setup Instructions

For using this application, you should clone down this repository. You will need `node` and `npm` installed globally on your machine.

Clone:

`git clone https://github.com/uzair-anwar/Facebook-Backend.git`

Installation:

`npm install`

To Start Server:

`npm start`

## Steps for read-only access

To start the express server, run the following

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.

## Database

In this application, I have used *MySQL* database for storing and retrieving accounts and posts.
