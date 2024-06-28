# Ruby Script

## Overview

This directory contains the Ruby script used for performing end-to-end tests on the instrumented React application using Selenium and generating the frontend code coverage reports.

## Prerequisites

Ensure you have the following versions installed:

- **Ruby:** 3.0.XX

## Running the Ruby Script

Follow these steps to set up and run the Ruby script for testing and coverage collection.

1. **Ensure the Instrumented Application is Running**

    Before running the Ruby script, make sure your React application with instrumented code is up and running.

2. **Install Selenium WebDriver**

    Install the required Selenium WebDriver gem:
    ```bash
    gem install selenium-webdriver
    ```
    
3. **Run the Test Script**

    Execute the Ruby test script with the following command:
    ```bash
    ruby test.rb
    ```

4. **Create the Coverage Report Directory**

    Before generating the coverage report, create an empty directory named `coverage_report`:
    ```bash
    mkdir -p /path/to/your/project/coverage_report
    ```

5. **Generate the Coverage Report**

    After running the tests, generate the coverage report using nyc:
    ```bash
    npx nyc report --reporter=html --report-dir=/path/to/your/project/coverage_report --temp-directory=/path/to/your/project/.nyc_output
    ```
