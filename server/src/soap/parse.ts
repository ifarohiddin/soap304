import {parseStringPromise} from 'xml2js'

export const parseXml  =  async (xml: string) => {
    const parsedXml = await parseStringPromise(xml)

    console.log(parsedXml);
    

}