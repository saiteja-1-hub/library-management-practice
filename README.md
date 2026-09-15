# library-management-practice 

This is the library-management api backend for manageing books and users

# routes and the end points 

## user 
GET : Getting the user from backend
POST : Creating the users 

## /users/{id}

GET : get the user by ID
POST : Update the user by id 
DELETE :  Delete the user by id , if there is not dues , check if the user has issued book , if there is any fine to be colleted 

## users/subsription details/{id}

GET : Get a user subsription details by their Id 
  >> data of subsription
  >> valid till  ? 
  >> fine if any 

## /books 
GET : Get all the books in the system 
POSt : Post a new book to the system

## /book/{id}

Get :  Get a book by their Id
PUT : update book by id
DELETE : Delete book by id

## /books/issued 
GET :  get the books issued 

## /books/issued/withfine 

GET : Get books issued with fine with their fine amount 

## Subscrption Type

  >> Basic (3 mounths)
  >> Standard (6 mounths)
  >> Premimum (12 mounths)
  
>> if the user missed with renewal date , the user must pay $100
>> if the user missed his suSubscrption , he should pay $100
>> if the use missed suSubscrption and renewal he should pay $200


## commands 

npm init 
npm i express
npm i nodemon --save-dev

npm run dev

To restore package-lock.json and node_modules files , npm i / npm install 