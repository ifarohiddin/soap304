import { Builder } from 'xml2js';

export const buildSoapResponse = (operationType: string, data: any) => {
    const builder = new Builder({ headless: true });

    const responseObj = {
        'soap:Envelope': {
            $: {
                'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/'
            },
            'soap:Body': {
                [`${operationType}Response`]: data
            }
        }
    };

    return builder.buildObject(responseObj);
}