import QRCodeImage from "../../components/QRCode/QRCode";

const QRCodePage = () => {
    return (
      <>
        <QRCodeImage value_= {80} 
          format= 'IMAGE' 
          expirationSeconds= {3600} 
          allowMultiplePayments= {false}
          description='Pagamentos de lanches' />
      </>
    );
  };
  export default QRCodePage;
  