import { useEffect, useState } from "react";
import { fetchGitHubUser } from "../../services/ClientGitHub";
import { GitHubUserProps } from "../../interfaces/GitHubUserProps";

const GitHubUser: React.FC<GitHubUserProps> = ({ username }) => {
  const [user, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubUser(username)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);
  if (loading) return <div> Loading ...</div>;
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
