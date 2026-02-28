import type {Request, Response} from 'express';
import { parseXml } from './parse.ts';

export const pipeline = (req:Request, res:Response) => {
    const xml = req.body;
    parseXml(xml)
    
    res.json({message:"rsgfjhsgfjhsgfjhdsgfjh"})
}