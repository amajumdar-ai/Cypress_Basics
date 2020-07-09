# Cypress_Basics

Cypress Automation-  Cypress is a JavaScript-based end-to-end testing framework that doesn’t use Selenium at all. Cypress uses a BDD/TDD (Behavior Driven Development/ Test Driven Development) assertion library. Its built on top of Mocha- which is feature-rich JS test framework.

Advantages of Cypress tool:

•	Mainly used for UI automation
•	Easy to set up
•	Fast to implement and debug
•	Easy to execute
•	Browser support- Chrome, FF
•	No need to setup the web drivers to run the test cases in different browsers
•	No need to import dependencies to run/execute the code

Steps to setup your project-

1. Download Node and NPM
2. Create Cypress Working Folder
3. Generate package.json - Go inside the working directory> npm init //not required
4. Install Cypress- npm install cypress --save-dev
5. Download any code editor
	
How to launch the Test Runner-

1. to launch the browser and run the test case- ./node_modules/.bin/cypress open
2. to run all the test cases present under the example Folder in terminal - ./node_modules/.bin/cypress run
3. to run all the test cases present under the example Folder through terminal with launching the browser - ./node_modules/.bin/cypress run --headed
4. to run the test cases in a specific browser- ./node_modules/.bin/cypress run --browser chrome

Cypress- Xpath:
Adds XPath command to Cypress.io test runner

Install with npm

<npm install -D cypress-xpath>

Install with Yarn

<yarn add cypress-xpath --dev>

	
