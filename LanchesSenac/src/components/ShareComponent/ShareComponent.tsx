import { useEffect, useState } from 'react';
import { consultaAcaoPorCodigo } from '../../services/ShareAPI';
import { ShareRequestProps } from '../../interfaces/ShareRequestProps';

export const ShareComponent: React.FC<ShareRequestProps> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        consultaAcaoPorCodigo(symbol)
            .then((response) => {
                setShareData(response.data);
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
                <img src={share?.logourl} alt={`${symbol}`} width={100} />
                <h1>{share?.shortName}</h1>

            </div>
        </>
    );
};

export default ShareComponent;
