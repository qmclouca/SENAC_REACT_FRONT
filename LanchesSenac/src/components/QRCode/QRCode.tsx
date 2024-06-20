import { useEffect, useState } from "react";
import { QRPixCode } from "../../services/ClienteAsaas";
import { RequestQRCode } from "../../interfaces/RequestQRCode";
import React from "react";

const QRCodeImage: React.FC<RequestQRCode> = ({value_, format, expirationSeconds, allowMultiplePayments, description}) => {
  const [qrCodeData, setQRCodeData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

const requestData: RequestQRCode = {
    value_: value_,
    format: format,
    expirationSeconds: expirationSeconds,
    allowMultiplePayments: allowMultiplePayments,
    description: description
}

  useEffect(() => {
    QRPixCode(requestData)
      .then((response) => {
        setQRCodeData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [qrCodeData]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;
  const qrCodeImageDecoded = "data:image/png;base64, " + qrCodeData.data.encodedImage;
  const [base64Image, setBase64Image] = useState('');
  
  useEffect(() => {
    setBase64Image(qrCodeImageDecoded);
  }, []);
  return (
    <>
      <div>
      <h1>Display Base64 Image</h1>
      {base64Image && <img src={base64Image} alt="Base64 Image" />}
    </div>
    </>
  );
};

export default QRCodeImage;
