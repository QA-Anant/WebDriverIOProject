# WebDriverIOProject

This project is a WebDriverIO setup for end-to-end testing using TypeScript and Jasmine.

## Project Structure

- .gitignore 
- package.json 
- test/ 
  - pageobjects/ 
    - login.page.ts 
    - page.ts 
    - secure.page.ts
  - specs/ 
    - test.e2e.ts 
- tsconfig.json 
- wdio.conf.ts


### **test/pageobjects**: Contains the page object classes.
### **test/specs**: Contains the test specifications.

## Setup

1. **Install dependencies**:
    ```sh
    npm install
    ```

## Running Tests

To run the tests, use the following command:
```sh
npm run wdio
