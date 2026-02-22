import type {Request, Response} from 'express';
import { successResponseBuilder } from '../soap/soap.utils.ts';


export const usersController = (req:Request, res: Response) => {
    console.log(successResponseBuilder());
    
    

    res.set("Content-Type", "text/xml")
    res.type("text/xml").send(successResponseBuilder())
}