const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const products=["Apple","Banana","Orange"];
app.get('/api/products', (req, res) => res.send(products));
app.post("/api/proucts",(req,res)=>{
    products.push(req.body.name);
    console.log(req.body);
    res.send(products);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
