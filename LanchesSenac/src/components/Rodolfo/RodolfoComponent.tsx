import { useEffect, useState } from "react";
import { Rodolfo } from "../../interfaces/Rodolfo";
import { fetchRodolfo } from "../../services/ClientRodolfo";

const GitHubUser: React.FC<Rodolfo> = ({ symbol}) => {
  const [user, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRodolfo(symbol)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [symbol]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;

  return (
    <>
      <div>
        <h1>{user?.symbol}</h1>
        <h2>{user?.currency}</h2>
      </div>
    </>
  );
};

export default GitHubUser;
