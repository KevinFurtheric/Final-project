# Final Project

## Student Information

- **Name**: Kevin Furtheric Victor
- **Student Number**: 8915595
- **Date**: 2024/07/19

## Technology Stack

- **Frontend**: ReactJS
- **Backend**: NodeJS with Express
- **Database**: MongoDB (Atlas)

## Database Schema

### Products Schema

- `product_name`: String
- `price`: Number
- `description`: String
- `image`: String
- `category`: String
- `Stock`: Number

### Users Schema

- `username`: String (Primary key)
- `password`: String
- `email`: String
- `role`: String (customer or admin)

### Orders Schema

- `order_id`: ObjectID
- `username`: String (Foreign key)
- `product_name`: String
- `total_amount`: Number
- `status`: String ("Pending", "completed", etc.)

## Project Setup

1. **Initialize Your Project**

   - Created the repository on GitHub and cloned it to the local machine.

2. **Set Up Your Chosen Frontend Framework**

   - Initialized the ReactJS frontend framework.

3. **Set Up Your Chosen Backend Framework**

   - Initialized the NodeJS with Express backend framework.

4. **Configure Your Database**
   - Configured MongoDB (Atlas) with the appropriate schema.

- The project is set up using Git and GitHub for version control.

## Next Steps

- To create the User interfaces of :
  - Product listing
  - Shopping cart
  - Checkout
