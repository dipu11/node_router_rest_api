const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

dishRouter.get('/',(req, res, next)=>{
		res.end("serving all the dishes"); 
});

dishRouter.post('/',(req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

dishRouter.put('/',(req, res, next) => {
    
    res.end('PUT operation not supported on /dishes');
});

dishRouter.delete('/', (req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.get("/:dishId", (req, res, next)=>{
		res.end("serving particular dish with id:"+ req.params.dishId);
});

dishRouter.post("/:dishId", (req, res, next) => {
     res.statusCode=403;
     res.end("post with ids not supported for dishes");
});

dishRouter.put("/:dishId", (req, res, next) => {
    
    res.end('will update the dish with id:'+ req.params.dishId); 
});

dishRouter.delete("/:dishId", (req, res, next) => {
    res.end('Deleting  dishe with id:'+ req.params.dishId);
});



module.exports = dishRouter;