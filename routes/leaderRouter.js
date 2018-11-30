const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

leaderRouter.get('/',(req, res, next)=>{
		res.end("serving all the leaders"); 
});

leaderRouter.post('/',(req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
});

leaderRouter.put('/',(req, res, next) => {
    
    res.end('PUT operation not supported on /leaders');
});

leaderRouter.delete('/', (req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.get("/:leaderId", (req, res, next)=>{
		res.end("serving particular leader with id:"+ req.params.leaderId);
});

leaderRouter.post("/:leaderId", (req, res, next) => {
     res.statusCode=403;
     res.end("post with ids not supported for leaders");
});

leaderRouter.put("/:leaderId", (req, res, next) => {
    
    res.end('will update the leader with id:'+ req.params.leaderId); 
});

leaderRouter.delete("/:leaderId", (req, res, next) => {
    res.end('Deleting  leadere with id:'+ req.params.leaderId);
});



module.exports = leaderRouter;