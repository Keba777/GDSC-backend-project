# Blog API - Express.js Backend

## Description

This project is a RESTful API backend for a blog application, built using Express.js. The API provides endpoints for managing blog posts and users, with features like authentication, database interaction, and more.

## Project Structure

- **config/**: Contains configuration files, such as the database connection logic.
  - `database.js`: Handles the database connection setup.

- **controllers/**: Houses the business logic for handling requests and responses.
  - `blogController.js`: Manages blog-related operations.
  - `userController.js`: Manages user-related operations.

- **middlewares/**: Contains middleware functions that handle authentication, logging, or other pre-processing tasks.
  - `authMiddleware.js`: Manages authentication logic.

- **models/**: Defines the data models used in the application.
  - `blog.js`: The schema for blog-related data.
  - `user.js`: The schema for user-related data.

- **persistence/**: Handles the data access logic, abstracting the database operations.
  - `blogPersistence.js`: Handles database operations for blogs.
  - `userPersistence.js`: Handles database operations for users.

- **routes/**: Defines the application's routing logic, connecting endpoints to their respective controllers.
  - `blogRoutes.js`: Routes for handling blog-related API requests.
  - `userRoutes.js`: Routes for handling user-related API requests.

- **index.js**: The entry point of the application, where the Express server is configured and started.

## Features

- **Blog Management**: Create, read, update, and delete blog posts.
- **User Management**: User registration, login, and profile management.
- **Authentication**: Secures endpoints using JWT-based authentication.
- **Database Integration**: Persistent data storage using MongoDB (assumed based on typical setups).
- **CORS Support**: Configured to handle cross-origin requests.
- **Environment Variables**: Managed using `dotenv`.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- [MongoDB](https://www.mongodb.com/) (if applicable)

### Clone the Repository

```bash
git clone https://github.com/Keba777/GDSC-backend-project.git
cd GDSC-backend-project
