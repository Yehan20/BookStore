# Book Store

In this small app user can register and add books view and Update


### Try it out with these fake credentials

- email:goose@test.com
- Password: abcd

## Conecpts used

- use Newest Version of react router with its new features
- mongo db validations
- create Private Routes
- jwt token and refresh token
- express session
- mongodb atlas
- mvc architecture

## Features

- CRUD functionalities
- User authentication and authorization (JWT authentication)


## Tools and technologies used

- Taiwlind
- vite
- React + Hooks + Context
- React Router
- Nodejs + Express
- Mongo db
- express sessions
- jsonwebtokens
- bcrypt

## Get started

Open a terminal and clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/Yehan20/BookStore.git


# Remove current origin repository
$ git remote remove origin


# Go into the repository and client side app
$ cd books-store/books-api/books-fe


# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git


# Install dependencies
$ npm install


# run the server
$ npm run dev
```


At this point and the client app running in the browser at http://localhost:5173/<br />.



#  Book Store  api
Api consitsting of the different operations for books


## Get started

Open a terminal and clone this repo:

```bash

# Go into the repository of the apis
$ cd books-store/books-api/books-api



# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
```

Go to the project   folder, and create a `.env` file. Add the following environment variables with your own values( i have provided my env file for reference) :

```dosini
ACCESS_TOKEN_SECRET_KEY= Your key

REFRESH_TOKEN_SECRET_KEY=Your key

COOKIE_SECRET_KEY = Your key

MONGODB_CONNECTION_KEY =  Your Key
```

You can conntect to local mongo db or use a  online cluster <br />

Once you have created a local database, open up two terminals - one for the server, and one for the client:

```bash
# Terminal for the server
# cd into the server folder

# Install dependencies
$ npm install

# Install nodemon if you don't have it
# You can either install it globally, or locally only for this project (remove the -g flag)
npm install nodemon -g

# run the server
$ npm run devStart
```


Change the port number with any prefered port and then the server would run

At this point and the Server  running in the browser at http://localhost:3001/<br />.

