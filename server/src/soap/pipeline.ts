import type { Request, Response } from 'express';
import { parseXml } from './parse.ts';
import { dispatch } from './dispatch.ts';
import { buildSoapResponse } from './build.ts';
import { errorResponseBuilder } from './soap.utils.ts';

export const pipeline = async (req: Request, res: Response): Promise<void> => {
    try {
        const xml = req.body;
        const { operationType, payload } = await parseXml(xml);

        const result = await dispatch(operationType, payload);

        const responseXml = buildSoapResponse(operationType, result);

        res.type('application/xml').send(responseXml);
    } catch (error: any) {
        console.error('SOAP Pipeline Error:', error);
        res.status(500).type('application/xml').send(errorResponseBuilder(error.message));
    }
}