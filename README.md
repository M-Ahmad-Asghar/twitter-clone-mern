1. **Project Setup**
   - Create a new Git repository and README.md file. (Est. Time: 0.5 hour)
   - Set up the project structure for the backend and frontend. (Est. Time: 0.5 hour)
   - Configure the NodeJS framework for the backend (e.g., Express). (Est. Time: 1 hour)
   - Configure ReactJS for the frontend. (Est. Time: 0.3 hour)
   - **Total Estimated Time: 3 hours**

2. **Backend Development**
   - Implement the database schema and models for users, tweets, and likes. (Est. Time: 1.5 hours)
   - Create endpoints for user registration and authentication using JWT or any other chosen mechanism. (Est. Time: 2 hours)
   - Implement endpoints for fetching user information, own tweets, other user profiles, and follow/unfollow functionality. (Est. Time: 2.5 hours)
   - Develop endpoints for posting new tweets, deleting own tweets, and liking/unliking tweets. (Est. Time: 2 hours)
   - Add pagination functionality for fetching tweets. (Est. Time: 1 hour)
   - **Total Estimated Time: 9 hours**

3. **Frontend Development**
   - Create components for user registration and login forms. (Est. Time: 1.5 hours)
   - Build the timeline component to display a list of tweets. (Est. Time: 2 hours)
   - Implement the LIKE button functionality for each tweet. (Est. Time: 1 hour)
   - Implement pagination in the timeline component to show 10 tweets per page. (Est. Time: 1 hour)
   - Create a tweet detail component to show individual tweet information. (Est. Time: 1.5 hours)
   - Build the user profile component to display user information, own tweets, and a button for tweet deletion. (Est. Time: 2 hours)
   - **Total Estimated Time: 9 hours**


4. **Styling and UI Enhancements**
   - Apply basic styling to the application for a presentable UI. (Est. Time: 2 hours)
   - Ensure responsiveness across different screen sizes. (Est. Time: 1.5 hours)
   - **Total Estimated Time: 3.5 hours**

5. **Documentation and Finalization**
   - Write a detailed README.md file explaining the project, setup instructions, and implementation details. (Est. Time: 1 hour)
   - Review and refactor code for better code quality and maintainability. (Est. Time: 1.5 hours)
   - Finalize the project, check for any remaining bugs, and make necessary adjustments. (Est. Time: 1.5 hours)
   - **Total Estimated Time: 4 hours**

**Grand Total Estimated Time: 28 hours**

**Setup .env file for backend**
`DATABASE_URI=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=`

# Twitter Clone Backend

**Prerequisites:**
- Node.js installed (version 16.0.0 or later)
- MongoDB database (local or remote) with connection details

**Installation:**
1. Clone this repository to your local machine.
2. Open a terminal or command prompt and navigate to the backend-1 directory.

**Configuration:**
1. Create a file named `.env` in the root directory of the project.
2. Inside the `.env` file, set the following environment variables:

```
MONGODB_URI=your_mongodb_connection_string # Replace with your MongoDB connection string.
JWT_SECRET=your_secret_key # Replace with a secret key for JWT token encryption.
```

**Installing Dependencies:**
Run the following command to install the required dependencies:

```
npm install
```

**Running the Server:**
There are two ways to run the server: (by default it is using 5001)

1. **Production Mode:**
   To run the server in production mode, use the following command:

   ```
   npm start
   ```

2. **Development Mode:**
   To run the server in development mode with automatic restarts on code changes, use the following command:

   ```
   npm run server
   ```
# Twitter Clone Frontend


**Prerequisites:**
- Node.js installed (version 16.0.0 or later)
- Twitter Clone Backend server running and accessible at a specific URL (update the server URL in the application if required)

**Installation:**
1. Clone this repository to your local machine.
2. Open a terminal or command prompt and navigate to the frontend directory.

**Installing Dependencies:**
Run the following command to install the required dependencies:

```
npm install
```

**Running the Development Server:**
To run the frontend application in development mode, use the following command:

```
npm start
```

This will start the development server, and the application will be accessible at `http://localhost:3000` (or another port if 3000 is occupied).

**Building the Production Version:**
To create a production-ready build of the frontend application, use the following command:

```
npm run build
```

