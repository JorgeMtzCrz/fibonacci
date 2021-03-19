# Fibonacci API

To use the app you must first create an .env file with the following variables

PORT=3000
ENV=development
FRONTENDPOINT=http://localhost:3001 (this is if you want to use the app in some frontend point)

## Installation 
```bash
npm install
```

## Usage

The endpoint has 3 routes, the initial one only has a message that the server is working


Another route is

http://localhost:3000/fibonacci

In this we send through the POST verb a single parameter in the body with the name index and we will obtain as a response a field with the title result

and we have a route

http://localhost:3000/fibonacci/:index

this is a GET type route and we can replace the index parameter with any number and we will obtain a response result

In this first version, a for loop is used so that a better route of the fibonacci series numbers could be observed, but it could be improved using array methods and thus reduce the routes as much as possible.