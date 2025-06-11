const port = 3000;

const express=require('express'),
  app=express();

app.use(express.static('web'));

app.listen(port, () => console.log(`Cigar2 running at http://localhost:${port}`));
