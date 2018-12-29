/*
const http = require('http');

http.createServer((req,res)=>{});
*/

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next){
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
	
});
//Non-admin
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InN1ZGVlcCIsImlhdCI6MTUxNjIzOTAyMn0.MI7lU6bWvbSKB4Em_A7KB5Bf-Yq-VOnk5cwZoDHcWXQ";
//admin
let token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImluZHJhaiIsImFkbWluIjp0cnVlfQ.fr3hMui9dvSueZszkbx-PKhGj8PC0G4TFezQEH94Qwk";
//let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA";

router.post("/authenticate",function(req, res){
	let email = req.body.email;
	let password = req.body.password;

	if(email == "sudeep" && password == "1234")
	{
		res.status(200);
		res.json({token:token});
	}
	else if(email == "indraj" && password == "1234")
	{
		res.status(200);
		res.json({token:token2});
	}
	else
	{
		res.status(200);
		res.send(null);
	}
});

app.use("/",router);

app.listen(6200);