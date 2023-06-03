# Employee Management API Documentation

This API provides endpoints for managing employees, including creating, retrieving, updating, and deleting employee records.

## Table of Contents

- [Endpoints](#endpoints)
- [Models](#models)
- [Setup and Run](#setup-and-run)

## Endpoints

### Create Employee

- **URL:** `/employees`
- **Method:** `POST`
- **Description:** Create a new employee
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [Employee](#employee)
- **Response:**
  - Status: `201 Created` - Employee created successfully
  - Status: `500 Internal Server Error` - Failed to create employee

### List Employees

- **URL:** `/employees`
- **Method:** `GET`
- **Description:** Get a list of employees
- **Query Parameters:**
  - `page` (optional): The page number for pagination (default=1)
  - `limit` (optional): The number of items per page (default=10)
- **Response:**
  - Status: `200 OK` - Successful operation
  - Content-Type: `application/json`
  - Schema:
    - `page`: The current page number
    - `limit`: The number of items per page
    - `data`: Array of [Employee](#employee) objects
  - Status: `500 Internal Server Error` - Failed to retrieve employees

### Get Employee

- **URL:** `/employees/:id`
- **Method:** `GET`
- **Description:** Get an employee by ID
- **Path Parameters:**
  - `id`: The ID of the employee
- **Response:**
  - Status: `200 OK` - Successful operation
  - Content-Type: `application/json`
  - Schema: [Employee](#employee)
  - Status: `404 Not Found` - Employee not found
  - Status: `500 Internal Server Error` - Failed to retrieve employee

### Update Employee

- **URL:** `/employees/:id`
- **Method:** `PUT`
- **Description:** Update an employee by ID
- **Path Parameters:**
  - `id`: The ID of the employee
- **Request Body:**
  - Content-Type: `application/json`
  - Schema: [Employee](#employee)
- **Response:**
  - Status: `200 OK` - Employee updated successfully
  - Status: `404 Not Found` - Employee not found
  - Status: `500 Internal Server Error` - Failed to update employee

### Delete Employee

- **URL:** `/employees/:id`
- **Method:** `DELETE`
- **Description:** Delete an employee by ID
- **Path Parameters:**
  - `id`: The ID of the employee
- **Response:**
  - Status: `200 OK` - Employee deleted successfully
  - Status: `404 Not Found` - Employee not found
  - Status: `500 Internal Server Error` - Failed to delete employee

## Models
![Screenshot 2023-06-03 103146](https://github.com/bit-web24/Employee-API/assets/62652273/3b7ced29-0608-404e-bb9a-1813e95750cd)

### Employee

- **Properties:**
  - `id`: integer - The auto-generated ID of the employee
  - `fullName`: string - The full name of the employee
  - `jobTitle`: string - The job title of the employee
  - `phoneNumber`: string - The phone number of the employee
  - `email`: string - The email address of the employee
  - `address`: string - The address of the employee
  - `city`: string - The city of the employee
  - `state`: string - The state of the employee
  - `createdAt`: string (date-time) - The date and time when the employee was created
  - `updatedAt`: string (date-time) - The date and time when the employee was last updated

### PrimaryEmergencyContact

- **Properties:**
  - `id`: integer - The auto-generated ID of the primary emergency contact
  - `contactName`: string - The name of the primary emergency contact
  - `phoneNumber`: string - The phone number of the primary emergency contact
  - `relationship`: string - The relationship of the primary emergency contact to the employee
  - `createdAt`: string (date-time) - The date and time when the primary emergency contact was created
  - `updatedAt`: string (date-time) - The date and time when the primary emergency contact was last updated

### SecondaryEmergencyContact

- **Properties:**
  - `id`: integer - The auto-generated ID of the secondary emergency contact
  - `contactName`: string - The name of the secondary emergency contact
  - `phoneNumber`: string - The phone number of the secondary emergency contact
  - `relationship`: string - The relationship of the secondary emergency contact to the employee
  - `createdAt`: string (date-time) - The date and time when the secondary emergency contact was created
  - `updatedAt`: string (date-time) - The date and time when the secondary emergency contact was last updated

## Setup and Run

To set up and run the Employee Management API, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/bit-web24/Employee-API.git
   ```

2. Install dependencies:

   ```shell
   cd Employee-API
   npm install
   ```

3. Configure the API:

   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and set the required environment variables, such as the database connection details.

4. Run the API:

   ```shell
   npm start
   ```

   This will start the API server, and you should see a message indicating that the server is running.

5. Test the API:

   You can now test the API endpoints using a tool like Postman or cURL. The base URL for the API will be `http://localhost:3000/`.

   Example requests:

   - Create a new employee:

     ```http
     POST /employees
     Content-Type: application/json

     {
       "fullName": "John Doe",
       "jobTitle": "Software Engineer",
       "phoneNumber": "1234567890",
       "email": "johndoe@example.com",
       "address": "123 Main Street",
       "city": "New York",
       "state": "NY",
       "primaryEmergencyContact": {
         "contactName": "Jane Smith",
         "phoneNumber": "9876543210",
         "relationship": "Spouse"
       },
       "secondaryEmergencyContact": {
         "contactName": "Alex Johnson",
         "phoneNumber": "8765432109",
         "relationship": "Friend"
       }
     }
     ```

   - Get a list of employees:

     ```http
     GET /employees
     ```

   - Get an employee by ID:

     ```http
     GET /employees/{id}
     ```

   - Update an employee by ID:

     ```http
     PUT /employees/{id}
     Content-Type: application/json

     {
       "fullName": "Updated Name"
     }
     ```

   - Delete an employee by ID:

     ```http
     DELETE /employees/{id}
     ```
