# Expance-Tracker-Application

A scalable RESTful API built using Node.js, Express, and MongoDB for managing expenses. 
The API provides CRUD operations, advanced filtering, sorting, pagination, and role-based authentication with JWT.
It also supports CSV bulk uploads and advanced statistics generation using MongoDB's aggregation framework.

Features :-
User Authentication and Role-based Authorization (Admin vs. Regular User)
Expense Management (CRUD operations)
Bulk CSV Upload for Expenses
Advanced Filtering (by category, date range, payment method)
Sorting and Pagination
MongoDB Aggregation for statistics (total expenses by month, category breakdown, payment method breakdown)
Caching with Redis for frequently accessed data
Secure Password Hashing with Bcrypt

Technologies Used :-
Backend: Node.js, Express
Database: MongoDB, Mongoose
Authentication: JWT
Caching: Redis
CSV Handling: Multer, CSV-Parser
Password Security: Bcryp

Installation and Setup :-
Install Dependencies like npm i express mongoose cookie-parser jsonwebtoken redis gitignore dotenv.
And Set Up Environment Variables.

API Endpoints

Register a new user :-  create post route ---   http://localhost:8080/user/signup
login a user :-    create post route ---        http://localhost:8080/user/login

Expense Management :-

Add an Expense :-  create a post route --  http://localhost:8080/Expense/add

Bulk Upload Expenses (CSV) :-   http://localhost:8080/Expense/bulk-upload

Fetch Expenses with Filtering, Sorting, and Pagination :-    http://localhost:8080/Expense/getdata

Update an Expense (Partial Update with PATCH):-  http://localhost:8080/Expense/update/:id

Delete Multiple Expenses:-  http://localhost:8080/Expense/delete

Statistics and Aggregations :-

Total Expenses per Month :-   http://localhost:8080/Expense/total

Category-wise Expense Breakdown:- http://localhost:8080/Expense/breakdown

Caching :-
Frequently accessed data is cached using Redis. 
The cache is automatically updated when new data is created or existing data is updated. 
You can configure the cache TTL (time-to-live) in the utils/caching.js file.




