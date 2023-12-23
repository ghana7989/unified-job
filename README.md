
# Universal Job Profile App

This project is a full-stack web application for creating and managing universal job profiles. It is structured as a monorepo using Nx, with two main applications: `frontend` for the React-based user interface and `backend` for the Node.js and Express server with MongoDB as the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- Nx CLI

### Installation

1. **Clone the repository**

    bashCopy code

    `git clone https://github.com/your-username/universal-job-profile-app.git
    cd universal-job-profile-app`

2. **Install dependencies**

    Navigate to the root of the project and run:

    bashCopy code

    `npm install`

3. **Set up environment variables**

    Create `.env` files in both the `frontend` and `backend` directories. Configure your database URI and other necessary environment variables.

    Example for `backend/.env`:

    bashCopy code

    `DATABASE_URI=mongodb://localhost:27017/jobProfileDB
    PORT=5000`

    Example for `frontend/.env`:

    bashCopy code

    `REACT_APP_API_URL=http://localhost:5000/api`

4. **Start the MongoDB server**

    Ensure that MongoDB is running on your system.

5. **Run the applications**

    Use Nx to serve the applications:

    - For the backend:

        bashCopy code

        `nx serve backend`

    - For the frontend:

        bashCopy code

        `nx serve frontend`

    The frontend app will be available at `http://localhost:3000`, and the backend will run on `http://localhost:5000`.

### Project Structure

- **`/apps/frontend`**: Contains the React application.
- **`/apps/backend`**: Contains the Node.js and Express server application.
- **`/libs`**: Shared libraries used by both frontend and backend.

## Features

- User authentication and authorization
- Profile creation and editing
- Section-based profile management (Education, Skills, Experience, etc.)
- API for managing user data
- Responsive UI for a seamless experience across devices

## Development

### Backend

- Located in `/apps/backend`.
- Uses Express.js for handling API requests.
- Connects to MongoDB for data persistence.
- Follows RESTful principles for API design.

### Frontend

- Located in `/apps/frontend`.
- Built with React.js for dynamic user interfaces.
- Communicates with the backend via REST API.
- Implements a clean and user-friendly design.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
