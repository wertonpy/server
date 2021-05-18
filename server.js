const express=require('express');
const Datastore=require('nedb');

const app=express();
const port=process.env.PORT;
app.listen(port, () => {
console.log(`starting server at ${port}`);
});
