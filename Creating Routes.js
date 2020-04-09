const express= require('express');
const app =express();

app.get('/',(req ,res)=>{
res.send('hello world');
});
app.get('/courses',(req ,res)=>{
res.send('courses Roetes');
});
app.get('/courses/:name/:age',(req, res)=>{
    console.log(req.params);
    res.send(req.params.name + " : " + req.params.age);
});
