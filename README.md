<h3 align="center">
  <img align="center" src="./client/public/logo.png" alt="logo" width="250"></a>
  <h1 align="center">So the Doctors can focus on YOU</h1>
</h3>

HIPPOCRATES: An ERP that allows our world's small healthcare providers to manage and organize their practices efficiently at a reasonable cost. Thus, Hippocrates provides practitioners and medical staff the tools and the ease to providing patients with personalized health services.

* WHAT: This app was created for small healthcare businesses and hospitals, practitioners, and medical staff as a tool for managing and organizing digital records for patient information as well as essential business documentation, patient accounting, and clinic accounts and its inventory. 

* PROBLEM WE TARGETED: A small medical practice with CRM software in use most often means that they are spending an incredibly high amount on annual software licensing and renewal fees and usually an additional fee on one of the software's subscription tier packages (the latter either as a month-to-month expense or as a single yearly fee). 

* OUR SOLUTION: Acquiring CRM software for a medical practice is very expensive which is why we created Hippocrates to serve as an alternate solution to the big names in software in use by medical giants. Offering our software at an affordable price aids small healthcare companies with the tools for making better operational decisions and granting those companies access to a solution in efficient clinic and patient information management.

## Deployed Link
[Preview on Heroku](https://git.heroku.com/mysterious-headland-90957.git)

## Getting Started 
Simply click on the deployed link and explore the website. You can register for a new account, or, if you're a returning user, you can go straight to the log in option. 

After registering or logging in, you can now start utilizing the site and begin by setting up patient and physician accounts, entering and saving frequently administered procedures and exams, and even set up accounts and billing! 

If you want to run your own local instance, follow the installation instructions provided below.

## Installation
Inside your terminal or command prompt, navigate to the location of the cloned repo. Install the necessary dependencies by running either - 
```
npm i
```
or
```
yarn install
```
After all dependencies have been installed, you will need to make sure to have mongoDB configured on your computer as outlined in the next section.

If you already have mongoDB setup, you can initialize the app by running the following yarn command.
```
yarn start
```
It will launch the application at `http://localhost:3000` and you are now ready to navigate the core functions of your practice through the app. 

## mongoDB
For the app to render locally you will need mongoDB installed on your computer. Depending on your operating system, the installation proccess will be different. You can find more information on installing mongoDB per specific operating systems cited in the official documentation.
```
https://docs.mongodb.com/manual/installation/
```

## Hippocrates is Built With
* HTML5 & CSS3
* [Bootstrap](https://getbootstrap.com/) - CSS framework
* [Javascript](https://www.javascript.com/) - programming language
* [mongoDB](https://www.mongodb.com/) - database
* [Express.js](https://expressjs.com/) - routing framework
* [React.js](https://reactjs.org/) - user interface library
* [Node.js](https://nodejs.org/en/) - javascript runtime

## NPM Packages Used
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client
* [body-parser](https://www.npmjs.com/package/body-parser) - Request parsing middleware
* [Express](https://www.npmjs.com/package/express) - Routing framework
* [mongoose](https://www.npmjs.com/package/mongoose) - NoSQL database
* [morgan](https://www.npmjs.com/package/morgan) - Logging middleware
* [morgan-body](https://www.npmjs.com/package/morgan-body) - Logging middleware
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Routing library for React with DOM bindings


## The Development Team
* **Roberto Baldizon** - [b0bbybaldi](https://github.com/b0bbybaldi)
* **Alexandra Goodwin** - [alexgood1](https://github.com/alexgood1)
* **Connor Barnett** - [Connor218](https://github.com/Connor218)
* **Junior Salamanca** - [jsalamanca23](https://github.com/jsalamanca23)

## Acknowledgements
A huge thank you to Jerome and TA's Amber, Sasha, and Ricky of UC Berkekely Coding Bootcamp for the guidance and mentorship.