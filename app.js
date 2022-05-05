const express = require('express');
const Explorers = require('./models/Explorers');

const app = express();
const port = 4000;

app.use(express.json());

const router = express.Router();

router.get('/', ((req, res) => {
    
    res.json(Explorers.getAllExplorers());
    }
));

router.get('/email',((req,res)=>{
    res.json(Explorers.haveCertification());
}))

router.get('/credits',((req,res)=>{
    const {credits=500} = req.query;
    res.json(Explorers.minCredits(credits));
}))

app.use('/v1/students', router);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})