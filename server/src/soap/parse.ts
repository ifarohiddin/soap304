import {parseStringPromise} from 'xml2js'

export const parseXml  =  async (xml: string) => {
    const parsedXml = await parseStringPromise(xml)
    const body = parsedXml['soap:Envelope']['soap:Body']
     
    const operationType = Object.keys(body[0])[0]
    const payload = body[0][operationType]

    
    return {operationType, payload}
}




