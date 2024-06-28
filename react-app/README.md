# React App

## Overview

This directory contains the React application for the UI Code Coverage Example project. It provides the setup instructions to run the application locally, instrument the code for coverage collection, and start the development server.

## Prerequisites

Ensure you have the following versions installed:

- **Node.js:** 18.15.0
- **npm:** 9.5.0

## Run Developed Application Locally

Follow these steps to set up and run the React application on your local machine.

1. **Install Modules**

    First, install the required npm modules by running:
    ```bash
    npm install
    ```

2. **Run the Project**

    Start the development server with the following command:
    ```bash
    npm start
    ```

    This will launch the application, and you can view it in your browser at `http://localhost:3000`.

3. **Code Instrumentation**

    To instrument the code for coverage collection, run:
    ```bash
    npm run instrument
    ```

    This command invokes the built-in `nyc instrument --in-place src --extension .js` command to instrument the code in place, targeting all JavaScript files in the `src` directory.
