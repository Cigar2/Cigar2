const express=require('express'),app=express();app.use(express.static('web'));app.listen(process.env.PORT);
