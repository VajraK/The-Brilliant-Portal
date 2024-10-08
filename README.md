# The Brilliant Portal (TBP)

The Brilliant Portal is a React-based web application that includes interactive elements such as a blog, a map using Leaflet, and a 3D animation using Three.js. This README will guide you through the steps needed to install and run the project locally.

## Prerequisites

Before installing and running the project, make sure you have the following installed:

- **Node.js** (v14 or higher) and **npm** (Node Package Manager)
- **Git** (to clone the repository)

## Installation Steps

Follow these steps to get The Brilliant Portal up and running:

1. **Clone the Repository**

   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/VajraK/The-Brilliant-Portal.git
   cd the-brilliant-portal
   ```

   Replace `<USERNAME>` with your GitHub username if necessary.

2. **Install Dependencies**

   Once in the project directory, install the required dependencies:

   ```bash
   npm install
   ```

   This command will install all the packages listed in `package.json`, including React, Leaflet, and React Router.

3. **Start the Development Server**

   To start the development server, run the following command:

   ```bash
   npm start
   ```

   This will start the React development server and open the application in your default web browser. By default, it runs at `http://localhost:3000`.

4. **Navigate Through the Application**

   - **Home**: The main page welcoming users to The Brilliant Portal.
   - **Blog**: A sample blog page showcasing content.
   - **Map**: An interactive map using Leaflet. Clicking on the marker will take you to the 3D animation page.
   - **Animation**: A 3D scene rendered using React Three Fiber.

## Project Structure

- **src/**: Contains all the source files for the React application.
  - **pages/**: Includes individual page components such as `Home`, `Blog`, `Map`, and `Animation`.
  - **App.js**: The main application component that sets up routing.

## Scripts

The following scripts are available in the project:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run eject`: Ejects the app from Create React App (use with caution).

## Additional Notes

- **.gitignore**: The repository includes a `.gitignore` file to prevent unnecessary files, such as `node_modules/` and build artifacts, from being committed.
- **Environment Variables**: If you need to add environment-specific settings, create a `.env` file in the root directory.

## License

This project is open source. Feel free to modify and use it for your own purposes.

## Contributing

If you'd like to contribute to The Brilliant Portal, please fork the repository and submit a pull request with your changes.

## Contact

For questions or support, feel free to reach out through the repository's issues section.
