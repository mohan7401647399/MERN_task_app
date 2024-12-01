# MERN Task App

A task management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to help users create, manage, and track their tasks efficiently. The application features a user-friendly interface and robust backend to handle CRUD operations seamlessly.

## Live Demo

    https://mern-task-app-react.netlify.app

## Usage

**User Registration and Login**:
        Create an account and log in to start managing tasks.
**Task Creation**:
        Add new tasks with title, description, and optional category.
**Task Management**:
        Edit or delete tasks and mark them as complete or incomplete.
**Search and Filter**:
        Locate tasks easily with built-in search and filtering features.

## Features

- **User Authentication**: Secure user registration and login with JWT and bcrypt.
- **Task Management**: Add, edit, delete, and mark tasks as complete or incomplete.
- **Task Categories**: Organize tasks by categories or tags.
- **Real-Time Updates**: Changes reflected instantly through efficient state management.
- **Search and Filter**: Quickly locate tasks using search functionality.
- **Responsive Design**: Optimized for all device sizes.

## Technologies Used

### Frontend
- **React.js**: Building interactive and dynamic user interfaces.
- **React Router**: Client-side routing for smooth navigation.
- **Axios**: Simplified HTTP requests to the backend.
- **CSS/SCSS**: Responsive and modern UI design.

### Backend
- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Framework for building RESTful APIs.
- **JWT (JSON Web Tokens)**: Secure token-based authentication.
- **bcrypt**: For password encryption.

### Database
- **MongoDB**: A NoSQL database for storing user and task information.
- **Mongoose**: MongoDB object data modeling (ODM).

## Installation

Follow these steps to set up the project locally.

### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community) locally or use a MongoDB Atlas cluster.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/mohan7401647399/MERN_task_app.git

2. Navigate to the project directory:
    cd MERN_task_app

3. Install dependencies:
    **For the server**:
        cd server
        npm install
    **For the client**:
        cd client
        npm install


4. Configure environment variables:
    **Create a .env file in the server directory with the following**:

        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_secret_key

5. Run the application:

 -   Start the backend:
 -       cd server
 -   npm run dev
 -       Start the frontend:
 -   cd client
 -       npm start

6. Open your browser and go to:

  -  http://localhost:3000
