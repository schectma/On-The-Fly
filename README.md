# Project Name

A full-stack web app for creating, viewing, editing, and deleting items, and linking related items together.

## Stack

- **Client:** React and Vite
- **Server:** Express and PostgreSQL

## Setup

1. Create `server/.env` with your database connection details:

   ```
   PGUSER=
   PGPASSWORD=
   PGHOST=
   PGPORT=
   PGDATABASE=
   ```

2. Start the server. This resets the database to its sample data, then runs on port 3001.

   ```
   cd server
   npm install
   npm start
   ```

3. In a second terminal, start the client:

   ```
   cd client
   npm install
   npm run dev
   ```

The client forwards `/api` requests to the server.
