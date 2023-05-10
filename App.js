const express = require('express');
const app = express();
const collection= require("./mongodb")
const mongodb = require('mongodb');
const PORT = 3000;
app.get('/', (req, res)=>{
	res.status(200);
	res.send("Welcome to root URL of Server");
});
app.use(express.json());
 app.post('/', async(req, res)=>{
     const {name} = req.body;
       const data ={
		name : req.body .name}
	await collection.insertMany([data])
	res.send(`Welcome ${name}`);
 })
// app.post("/",async(req,res)=>{

// 	const data = {
// 		name : req.body.name,
		 
// 		// res.send(`welcome ${nam}`);
	
// 	}  
// 	await collection.insertMany([data])
	
// 	//res.send(`welcome ${name}`);
	
// 	})


// app.put('/:id', (req, res) => {
// 	const id = req.params.id;
// 	console.log(id)
  
// 	User.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
// 	.then(data=>{
//         if(!data){
//             res.status(404).send({message:`Cannot Update user with ${id}.Maybe user not found`})
//         }
//         else{
//             res.send(data)
//         }
//     })
//     .catch(err=>{
//         res.status(500).send({message:"Error Update user information"})
//     })
//   });
app.put('/:id',(req, res)=> {
		collection.updateOne({_id:req.params.id},{$set : {name :req.body.name}})
		.then((result)=>{
			res.status(201).json(result)
		}).catch((err)=>{console.warn(err)})
	});
app.delete("/:id",async (req,res)=>{
 	console.log(req.params.id)
 	const data =await collection();
 	const result = await collection.deleteOne({_id: new mongodb.ObjectId (req.params.id)})
	res.send(result)
})
// app.delete('/:id',(req, res)=>{
// const result= collection.deleteOne({_id : req.body.id},{$set : {name : req.body.name}})
// 	.then((result)=>{
// 		res.status(201).json(result)
// 	}).catch((err)=>{console.warn(err)})
// });
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
