# React Native Wallet Backend

This is the backend for a wallet application, built with Node.js, Express, and Neon (serverless Postgres). It provides RESTful APIs for managing user transactions.

## Features
- User transaction management (CRUD)
- Transaction summary (balance, income, expenses)
- PostgreSQL (Neon serverless) integration
- Environment-based configuration

## Project Structure
```
backend/
  config/
    db.js                # Database connection and initialization
  controllers/
    transactionsController.js  # Business logic for transactions
  routes/
    transactionsRoute.js  # API routes for transactions
  server.js              # Main server entry point
  package.json           # Project metadata and dependencies
```

## Getting Started

### Prerequisites
- Node.js (v19 or higher recommended)
- npm
- Neon/PostgreSQL database

### Installation
1. Clone the repository and navigate to the backend directory:
   ```sh
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root with the following content:
   ```env
   DATABASE_URL=<your_neon_postgres_connection_string>
   PORT=5001 # or any port you prefer
   ```

### Running the Server
- For development (with auto-reload):
  ```sh
  npm run dev
  ```
- The server will start on the port specified in your `.env` file (default: 5001).

## API Endpoints

All endpoints are prefixed with `/api/transactions`.

### Get All Transactions for a User
- **GET** `/api/transactions/:userId`
- Returns all transactions for the specified user, ordered by date (newest first).

### Create a Transaction
- **POST** `/api/transactions/`
- Body:
  ```json
  {
    "title": "string",
    "amount": number,
    "category": "string",
    "user_id": "string"
  }
  ```
- Returns the created transaction.

### Delete a Transaction
- **DELETE** `/api/transactions/:id`
- Deletes the transaction with the specified ID.

### Get Transaction Summary for a User
- **GET** `/api/transactions/summary/:userId`
- Returns an object with `balance`, `income`, and `expenses` for the user.

## Environment Variables
- `DATABASE_URL`: Neon/Postgres connection string
- `PORT`: Port for the server (default: 5001)

## Dependencies
- express
- dotenv
- @neondatabase/serverless
- cors
- nodemon (dev)

## License
ISC 
