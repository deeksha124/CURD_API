// const express = require('express');
// const app = express();
// const collection= require("./mongodb")
// const mongodb = require('mongodb');
// const PORT = 3000;
// app.get('/', (req, res)=>{
// 	res.status(200);
// 	res.send("Welcome to root URL of Server");
// });
// app.use(express.json());
//  app.post('/', async(req, res)=>{
//      const {name} = req.body;
//        const data ={
// 		name : req.body .name}
// 	await collection.insertMany([data])
// 	res.send(`Welcome ${name}`);
//  })
// app.put('/:id',(req, res)=> {
// 		collection.updateOne({_id:req.params.id},{$set : {name :req.body.name}})
// 		.then((result)=>{
// 			res.status(201).json(result)
// 		}).catch((err)=>{console.warn(err)})
// 	});
// app.delete("/:id",async (req,res)=>{
//  	console.log(req.params.id)
//  	const data =await collection();
//  	const result = await collection.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
// 	res.send(result)
// })

// app.listen(PORT, (error) =>{
// 	if(!error)
// 		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
// 	else
// 		console.log("Error occurred, server can't start", error);
// 	}
// );
const express = require('express');
const app = express();
const mongodb = require('mongodb');
const PORT = 3000;

app.use(express.json());

const routes = require('./routes');

app.use('/', routes);

app.listen(PORT, (error) => {
     if(!error) {
          console.log(`Server is successfully running, and app is listening on port ${PORT}`);
     } else {
          console.log("Error occurred, server can't start", error);
     }
});
