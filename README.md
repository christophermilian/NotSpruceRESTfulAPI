# RESTful HAPI API 

## Overview
RESTful API that performs CRUD (Create, Read, Update, Delete) on a table of properties in a PostgresSQL database.

## Setup

### Endpoints
- This API serves four endpoints:
  - `GET` /property, which returns a list of all properties
  - `POST` /property, which creates a property
  - `PATCH` /property/$id, which updates an already-existing property
  - `DELETE` /property/$id, which deletes an already-existing property
  - More details can be found in the attached Swagger documentation.

### Database
- A PostgreSQL 11.12 database is used to send queries to.
- Connection configuration is taken care of by an `.env` file that is required. 
Here is the outline of the `.env` file:
```
DATABASE_URL=postgres://username:password@localhost/database
API_HOST=localhost
API_PORT=8000

```

### Dependencies 
Here is a list of the main dependencies for this project:
- Node (>= 16.0.0) 
- NPM
- HAPI (>= 20.1.5)
- Joi (>= 17.4.0)
- HAPI Postgres Connection Plugin (>= 7.0.0)

### Configuration
Install all dependencies.
```
$ npm install
```
### Compilation
To start the server you must run
```
$ npm run start
```
