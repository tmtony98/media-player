//import json -server library
const jsonServer = require ('json-server')

//create a server for running json data 

//create is a method
const mpServer = jsonServer.create()

//setting up path/route for db.json
const router = jsonServer.router('db.json')
 
//use middleware to convert every data to json
const middlewares =jsonServer.defaults()


//set up port number for running json server
const port = 4000 || process.env.port

//use middleware and router to your server
mpServer.use(middlewares)
mpServer.use(router)

//to listyen server app to resolve request

mpServer.listen(port,()=>{
    console.log(`media player starrted at port ${port} and waiting foe request`);
})




