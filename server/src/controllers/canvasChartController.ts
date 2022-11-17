import {Request, Response} from "express";
import Model from "../model/model";
const fakedata = [ { day: 1, time:[2,3] }, { day: 2, time:[2,3] }];
const model:Model = new Model();
exports.test=(req:Request,res:Response)=>{

		
	try{
	    console.log('canvas',req.body.email);
        const userData = model.getData(req.body.email);
        res.status(201).json({status:'ok', data: userData})
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}
exports.change=(req:Request,res:Response)=>{
		console.log(req.body)
	try{
		const userData = model.changeData( req.body.day,req.body.timeFrom,req.body.timeTo)
	    //console.log('canvas',req.body.email);

        res.status(201).json({status:'ok', data: userData})
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}