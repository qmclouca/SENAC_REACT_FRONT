export interface ResponseQRCode{
    "id": string;
    "encodedImage": string;
    "payload": any;
    "allowsMultiplePayments": boolean;
    "expirationDate": Date;
    "externalReference": any;
}