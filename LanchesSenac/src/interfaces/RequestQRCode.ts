export interface RequestQRCode{
    value_: number;
    format: string;
    expirationSeconds: number;
    allowMultiplePayments: boolean;
    description: string;
}