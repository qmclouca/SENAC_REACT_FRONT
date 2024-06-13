import { useEffect, useState } from "react";
import { QRPixCode } from "../../services/ClienteAsaas";
import { BuscaId } from "../../interfaces/BuscaId";

const MetodoPagamentoPix: React.FC<BuscaId> = ({ id }) => {
  const [QRCode, setQRCodeData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const idt: BuscaId = id;
    QRPixCode(idt.id)
      .then((response) => {
        setQRCodeData(response.data);
        })
      .catch((err) => {
        setError(err.message);
       
      });
  }, [QRCode]);
   if (error) return <div> Error: {error}</div>;

  return (
    <>
      <div>
        <img src={user?.avatar_url} alt={`${username}'s avatar`} width={100} />
        <h1>{user?.name || user?.login}</h1>
        <p>{user?.bio}</p>
        <p>
          <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </p>
      </div>
    </>
  );
};

export default GitHubUser;
