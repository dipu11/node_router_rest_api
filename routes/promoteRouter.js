const express = require('express');
const bodyParser = require('body-parser');

const promoteRouter = express.Router();

promoteRouter.use(bodyParser.json());

promoteRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

promoteRouter.get('/',(req, res, next)=>{
		res.end("serving all the promos"); 
});

promoteRouter.post('/',(req, res, next) => {
    res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
});

promoteRouter.put('/',(req, res, next) => {
    
    res.end('PUT operation not supported on /promos');
});

promoteRouter.delete('/', (req, res, next) => {
    res.end('Deleting all promos');
});

promoteRouter.get("/:promoId", (req, res, next)=>{
		res.end("serving particular promo with id:"+ req.params.promoId);
});

promoteRouter.post("/:promoId", (req, res, next) => {
     res.statusCode=403;
     res.end("post with ids not supported for promos");
});

promoteRouter.put("/:promoId", (req, res, next) => {
    
    res.end('will update the promo with id:'+ req.params.promoId); 
});

promoteRouter.delete("/:promoId", (req, res, next) => {
    res.end('Deleting  promoe with id:'+ req.params.promoId);
});



module.exports = promoteRouter;