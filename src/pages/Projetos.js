import React, { useEffect, useState } from 'react';
import BigBox from '../components/BigBox';
import NormalBox from '../components/NormalBox';
import { ClipLoader } from 'react-spinners';

const Projetos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/joycebarbosag/repos');
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <BigBox>
      <h2>Meus Projetos</h2>
      {loading ? (
        <div className="loader">
          <ClipLoader size={50} color="#4a90e2" loading={loading} />
        </div>
      ) : (
        <div className="projetos-container">
          {repos.map((repo) => (
            <NormalBox key={repo.id}>
              <h2>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h2>
            </NormalBox>
          ))}
        </div>
      )}
    </BigBox>
  );
};

export default Projetos;