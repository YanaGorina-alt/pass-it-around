const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1><br>
  <h1>99 little bugs</h1><br>

   <a href="/${99-1}">Take one down, patch it around</a>` );
});


app.get('/:numberOfButtlesLeft', (req, res) => {
    let bottlesLeft = parseInt(req.params.numberOfButtlesLeft);
    let randomGoUp = Math.floor(Math.random() * 10);
    if(randomGoUp%2===0){
        bottlesLeft+=randomGoUp;
    }
    
    if(bottlesLeft===0){
        res.send(`<h1>${bottlesLeft} little bugs in the code</h1> <a href="/">start over again</a>` );
    } else{
        res.send(`<h1>${bottlesLeft} little bugs in the code</h1> <a href="/${bottlesLeft-1}">take one down, patch it around</a>` );
    }
  });




app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });