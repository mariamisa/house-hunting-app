# House Hunting App :house: 
house-hunting App that facilitates to access and rent available homes

## Live demo :tv: 
[Heroku link , Click here to visit our app](https://git.heroku.com/house-hunting-app.git)

use these credientials: <br>
email: Conrad_Rosenbaum38@gmail.com
password: 123456

### Team Lead:

- Mariam Isa

### Team Members:

- Adham Haisami 
- Yasmeen Atallah
- Mohammed Abadsa


### Problem:

Most of those who intend to get married or who are looking for a house find it very difficult to search and wander around to several areas to find a house that suits them at a price according to their capabilities.

### Solution:

Build a house-hunting application that facilitates users to rent houses, most of who looking for a house faced some difficulties, help to choose a suitable house.


#### [Our Prototype](https://www.figma.com/file/ikAAUREYQFA0GXxGEUYZRf/home-hunting?node-id=0%3A1)

## Installation Guide :

1. Clone this repo.
2. Navigate to the cloned repo.

### Database Setup

1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Along side with pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)

2. Open your terminal, run pgcli, navigate through the project to this path: `./server/database/config/build.sql`

3. Copy this file path and write in the terminal:

```
    \i <paste your copied path to the file>
```

4. build the dummy data by using this command:

```
    npm run build:db
```

### Project setup

1. Create a `.env` file in the project root folder.
2. Add the following in it **This step is so important!!**

```
  SECRET_KEY='AB#%&HD'

DATABASE_URL=postgres://team2:0000@localhost:5432/househunting

DEV_DB_URL=postgres://team2:123456@localhost:5432/househunting_dev

TEST_DB_URL=postgres://team2:123456@localhost:5432/househunting_test

```

3. To install the dependencies, run this command only for the first time:

```
    npm i
```

### Running the project:

1. To run the server, Open your terminal and run:

```
    npm run dev
```

2. To run the React Development server, Open another terminal and run:

```
    npm run client
```

3. To run the tests:

```
    npm test
```

### Data-Base Schema:

This is the schema of our database
[dbdigram](https://dbdiagram.io/d/5ee9bcf79ea313663b3aa9ed)
![dbimage](https://i.imgur.com/1lve6is.png)


### User Stories :open_book:
 #### ***As a renter and rented user:***
* I can Sign up into the app 
* I can log in into the app 
* I can see all available houses to rent
* I can see specific information about any house
* I want to search by different locations, prices and the number of room in the house
* I can add houses to my favourite list
* I need to create my own profile
* I need to compare between two houses
* I need control panel to manage my houses

## User Journey :airplane:

As a user, I can see all available houses that able to rent, search to find houses and I can add any liked house to my favorite list and compare the differences between two houses from my favorite list, inside my profile I have my information and control panel for my own houses available to rent.



## Technologies:

#### Front-end Technology:

- ReactJS (Hooks).
- Material UI.
- UnDraw.


#### Back-end Technology:
- NodeJS.
- Express.

#### Database Technology:
- postgress sql.

## Resources

https://reactjs.org/docs/getting-started.html

https://expressjs.com

https://www.npmjs.com/package/jsonwebtoken

https://www.npmjs.com/package/bcrypt


