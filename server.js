const express=require('express');
const Datastore=require('nedb');

const app=express();
const port=process.env.PORT;
app.listen(port, () => {
console.log(`starting server at ${port}`);
});

app.use(express.static("public"));
app.use(express.json({limit:"1mb"}))

const database=new Datastore("database1.db");
database.loadDatabase();

app.post('/api', (req, res) => {
database.insert(req.body)
});



