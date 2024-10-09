# The Brilliant Portal (TBP)

The Brilliant Portal is a React-based web application that includes interactive elements such as a blog, a map using Leaflet, and a 3D animation using Three.js. This README will guide you through the steps needed to install and run the project locally and then set it up with Nginx.

## Prerequisites

Before installing and running the project, make sure you have the following installed:

- **Node.js** (v14 or higher) and **npm** (Node Package Manager)
- **Git** (to clone the repository)
- **Nginx** (to serve the application)
- **Certbot** (to obtain SSL certificates)

## Installation Steps

Follow these steps to get The Brilliant Portal up and running:

1. **Clone the Repository**

   Open a terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/VajraK/The-Brilliant-Portal.git
   cd The-Brilliant-Portal
   ```

2. **Install Dependencies**

   Once in the project directory, install the required dependencies:

   ```bash
   npm install
   ```

   This command will install all the packages listed in `package.json`, including React, Leaflet, and React Router.

3. **Build the Application**

   To prepare the application for production, run the following command to create an optimized build:

   ```bash
   npm run build
   ```

   This will generate a `build/` directory with all the necessary static files to serve the application.

4. **Configure Nginx**

   After building the application, configure Nginx to serve the static files. Follow these steps:

   - Create a new Nginx configuration file for The Brilliant Portal:

     ```bash
     sudo nano /etc/nginx/sites-available/the-brilliant-portal
     ```

   - Add the following configuration:

     ```nginx
     server {
         listen 80;
         server_name your_domain_or_IP;

         root /path/to/The-Brilliant-Portal/build;
         index index.html;

         location / {
             try_files $uri /index.html;
         }
     }
     ```

     Make sure to replace `/path/to/The-Brilliant-Portal/build` with the actual path to the `build/` directory on your server, and replace `your_domain_or_IP` with your domain name or server IP address.

   - Enable the Nginx configuration by creating a symbolic link to the `sites-enabled` directory:

     ```bash
     sudo ln -s /etc/nginx/sites-available/the-brilliant-portal /etc/nginx/sites-enabled/
     ```

5. **Obtain SSL Certificate with Certbot**

   To secure your application with HTTPS, use Certbot to obtain an SSL certificate:

   ```bash
   sudo certbot --nginx -d your_domain_or_IP
   ```

   Follow the prompts to complete the certificate installation. Certbot will automatically update your Nginx configuration to use SSL.

6. **Restart Nginx**

   After saving the Nginx configuration, restart Nginx to apply the changes:

   ```bash
   sudo systemctl restart nginx
   ```

   Your application should now be accessible via your domain or IP address with HTTPS.

## Updating the Project

To update The Brilliant Portal to the latest version from the GitHub repository, follow these steps:

1. **Navigate to the Project Directory**

   Open a terminal and change to the project directory where you initially cloned the repository:

   ```bash
   cd /path/to/The-Brilliant-Portal
   ```

2. **Fetch the Latest Changes from the GitHub Repository**

   Pull the latest changes from the main branch of the GitHub repository:

   ```bash
   git pull origin main
   ```

   If your local changes conflict with the updates, you may need to resolve the conflicts manually before proceeding.

3. **Install New Dependencies**

   If there were any updates to package.json, you may need to install new dependencies:

   ```bash
   npm install
   ```

4. **Rebuild the Application**

   Rebuild the application to reflect the latest updates:

   ```bash
   npm run build
   ```

5. **Restart Nginx**

   If necessary, restart Nginx to apply any changes:

   ```bash
   sudo systemctl restart nginx
   ```

   Your application should now be updated and running the latest version.

## Project Structure

- **src/**: Contains all the source files for the React application.
  - **pages/**: Includes individual page components such as Home, Blog, Map, and Animation.
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
