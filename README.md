# ThreeKan  (Demo)
A logistic system tailored specifically for user need of pinning, organising and manage tasks


Please read the following article for styling: [React Bootstrap Guide]
(https://react-bootstrap.github.io/) to know more about this Styles

> **NOTE!** 

(http://blog.teamtreehouse.com/install-node-js-npm-mac)

> Install Node and NPM (instruction can be found on goole) if you don't already have. Use the latest version of Node


---

## Install and Running
`git clone https://ViTung@bitbucket.org/p02/threekan-front.git`

Go to the cloned directory and

`1. git checkout staging`

`2. sudo npm install`

`3. npm start`

`4. navigate to http://localhost:3000 in your browser of choice.`


---

## Overview
> Framework FE: React.js  (Without Redux)
> Hosting Framework: Express.js
> Source Control: BitBucket  (Git)

React is a single page rendering framework, which mean user will be using one html page throughout the whole process. The javascript will be manipulating the inner elements to make the page looks different.


---


## File Structure

| File        | Description          | 
| ------------- |:-------------:| 
| index.html         | **Inner body tag will be changed by React. Head tag is for importing other stuffs** | 
| server.js      | **Server side rendering**       |  
| webpack.config.js |  **Configuration for local development**       |
| webpack.production.config.js  |  **Configuration for production development**      |
| node_modules  | **Store all external libraries for the project (DO NOT EDIT)**       |
| assets  |  **Store all the assets such as images, css, icons, etcs**       |  
| src   |  **Where all the code is going to be**       |
| src/index.js  |  **The main js file that will take care of routing and handling middlewares**      |
| src/pages  | **Store all the pages such as /home ,  /support**      |
| src/components    | **Where all the components for the pages going to be**     |
|src/components/pageName    | **Each Page will have a set of components, use the page name as the folder name** |


---


### React by default
The project runs with React by default and hot replacement of changes to the modules. Currently it is on 0.14.3.

### CSS Global
For the sake of the product dev speed, we will be using Global CSS file which located in /assets/css/styles.css

### Beautify
With a beautify package installed in your editor it will also do that


---

# Repository Author
Vi Tung  (quvi6030@uni.sydney.edu.au |   tungvq68@gmail.com )

# READ ME Author
Vi Tung  (quvi6030@uni.sydney.edu.au |   tungvq68@gmail.com )