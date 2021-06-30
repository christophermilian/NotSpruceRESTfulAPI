# Takehome - Frontend

## Intro
Thank you for your interest in NotSpruce!
As part of our interview process, we ask our candidates to do a simple take-home coding challenge.
Please create a simple, RESTful API that performs CRUD on a table of properties.

## Requirements

### Required
- This API should serve four endpoints
  - `GET` /property, which returns a list of all properties
  - `POST` /property, which creates a property
  - `PATCH` /property/$id, which updates an already-existing property
  - `DELETE` /property/$id, which deletes an already-existing property
  - More details can be found in the attached Swagger documentation.
- Use any language or frameworks you deem appropriate (we use Express and Typescript, but use whatever is most comfortable for you)
- Add unit tests

### Optional
- Add filtering by state and pagination to `GET` /property
- Create database seed scripts
- Containerize it

## DB

- Please store and retrieve data at the provided DB (PostgreSQL 11.12). We will send DB creds via Slack.
- To get you started, the DB has been pre-seeded with some sample data.

Thank you!

## Checklist
- Set up routes (Done)
- Set up controllers (Controllers are being given models )
- set up property models (In-progress)
- Set up validators (Not Required)
- Find needed ORM (Done)
- Read how to use ORM (In-progress)

## Request Flow
1. Browser hits `localhost:8000/` followed by one of two endpoints: `/property` and `/property/$id` 
2. API routes the request with an accompanying HTTP method.
3. API uses the appropriate controller defined as the handler in the route.
4. Controller returns a polite message specifying the handler used. 