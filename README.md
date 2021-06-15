# Flashcard-o-matic

A local school has decided to put together a flashcard application, Flashcard-o-matic, to help their students study online. 
Teachers will use this application to create decks of flashcards for the subjects they teach, and students will study the decks. 
The school needs you to build the application that the students and teachers will use.

** Bootstrap 4**
is included with the starter HTML. You're welcome to use vanilla CSS or Bootstrap 4 for styling your project. However, your finished product does not have to match the styles in the provided screenshots, as you will not be assessed on the styling or responsiveness of the your project.

This project is designed to test your ability to work with rendering and state management using React. Before taking on this module, you should be comfortable with the following:

  - Installing packages via NPM.
  - Running tests from the command line.
  - Writing React function components.
  - Creating routes, including nested routes, using React Router
  - Using hooks like useState(), useParams(), and useHistory().
  - Debugging React code through console output and using the VS Code debugger.
  
  ## Project setup
  Follow the instructions below to get this project up and running on your own machine:

  Sync this Qualified challenge with your computer so that you can work on the project locally.
  Run npm install.
  To run the tests, you can run the following command:
  
  npm test
Most of the tests in this project wait for content to load via the API before continuing the test. Before the implementation is complete, the content never loads so the test fails with a timeout. As a result, the tests will initially run slowly. It may take perhaps a minute or more for all the tests run. The tests will speed up as the implementation nears completion.

You can run the application using the following command.

npm start
The start command will start two servers concurrently:

An API server, powered by json-server, running on http://localhost:5000
A React application running on http://localhost:3000
To stop the servers from running, you can press Ctrl + C.

Running on Windows
If you are having problems running npm start on Windows you may need to run the React client and server in separate terminals. Open a terminal and run npm run start:react to start the react application. Open another terminal and run npm run start:server to run the server.
