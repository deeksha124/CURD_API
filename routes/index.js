const express = require('express');
const router = express.Router();
const collection = require("../mongodb");
const mongodb = require('mongodb');

router.get('/', (req, res)=>{
	res.status(200);
	res.send("Welcome to root URL of Server");
});

router.post('/', async(req, res)=>{
     const {name} = req.body;
     const data = {
        name: req.body.name
     };
     await collection.insertMany([data]);
     res.send(`Welcome ${name}`);
});

router.put('/:id', (req, res)=> {
     collection.updateOne({_id:req.params.id}, {$set: {name: req.body.name}})
     .then((result) => {
          res.status(201).json(result);
     })
     .catch((err) => {
          console.warn(err);
     });
});

router.delete("/:id",async (req, res)=>{
     console.log(req.params.id);
     const data = await collection();
     const result = await collection.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
     res.send(result);
});

module.exports = router;
