# garage-control
<h2>This is a Node.JS API using Express framework and coded entirely using Typescript and compiled using webpack. </h2>

<p>In order to run the server after cloning the repository, make sure of to have Node JS and NPM / YARN installed in your machine / container</p>

<p>After cloning the repo, please navigate to the downloaded repo folder from a terminal and run the following commands <b>in this specific order<b/>:</p>
 <ul style="list-style-type: none">
    <li >
        npm install    
    </li>
    <li >
        npm run webpack
    </li> 
 </ul>
 
 <h4> Then launch the server using: </h4>
 <h3>npm start</h3>
 
 
 After running these commands you'll notice that 2 folders were created in the root project folder. These are the following:
 
 <p>/dist - created when the 'npm run webpack' command was executed. Contains the javascript index.js along with other files related to the HRM cache.</p>
 <p>/node_modules - created after npm install is executed in most NodeJS projects. Contains the modules binaries used in the project.</p>
 
 
 
 <h2>The /src folder has 3 subfolders: routes, items, controllers along with the index.ts file.</h2>
 
 <p>routes: Contains the Cars, Drivers and Car Usage API Routes.</p>
 <p>items: Contains the main interfaces used in the project along with the mockup-storage.ts file, which, as the name says, it's a mockup database carrying the data used by the API</p>
 <p>controllers: Contains the controllers, which are the files with the logic that treats and returns the data requested by the routes. </p>
 
 
 <h2>Enjoy!</h2>
