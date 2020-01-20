This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Auther
Auther: Tingchao Xu
Date  : 01/20/2020
Framework: React

### Project Description
Step 1. Create a component that will render an Array of Tasks. Render first 5 initially, and only render the "details" property of each Task.  Your Task JSON Object should have the following structure:

{

id: Number, //This id needs to be Unique for each Task

details: String,

completed: Boolean

}

Step 2. Have a button that allows you to "Show More" which will render 5 additional JSON objects every time it is clicked, until there are no more Tasks to display.

Step 3. Allow Tasks to be set to "completed" by rendering a checkbox component for each Task. Clicking this box should update the "completed" property of a Task to either true or false based on if the box was checked or unchecked.

## 1. Install deps node
Make sure you have `node` installed, with a version greater than `8.9.4`. Hghly recommend [`nvm`](https://github.com/creationix/nvm), or just installing the latest version of `node` with `brew install node` on macOS.

## 2. Run npm i on the project directory
Run `npm i` in project directory, it will install all the librarys.

## 3. Run project
Run `npm start` to start project.