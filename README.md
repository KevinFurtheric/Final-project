# Final-Project

Student name: Kevin Furtheric Victor
Student number: 8915595
Date: 2024/07/19

Technology stack
Frontend: ReactJS
Backend: NodeJS with express
Database: MongoDB (Atlas)

Database schema (MongoDB)

Products schema:

- product_name : String
- price : Number
- description : String
- image : String
- category : String
- Stock : Number

Users schema

- username : String (Primary key)
- password : String
- email : String
- role : String (customer or admin)

Orders schema

- order_id : ObjectID
- username : String (Foreign key)
- product_name : String
- total_amount : Number
- status : String ("Pending","completed" etc.)

Project setup :

- Initialized the project by creating the repository in github and cloned to the local machine.

Notes:

- The project is set up using Git and GitHub for version control.
- After the approval from the professor, I will start implementing user interfaces for product listing, shopping cart and checkout.
