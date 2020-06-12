import React, { useState, useEffect } from 'react';
import { RepoCard } from './RepoCard';
import Axios from 'axios';
import { Spinner } from './Spinner';

interface ProjectsProps {
  username: string;
  clientId: string;
  clientSecret: string;
  count: number;
  sort: string;
  repos: any[];
}

export const Projects: React.FC = () => {
  const [gitRepo, setGitRepo] = useState<ProjectsProps>({
    username: 'sanjaymagar',
    clientId: '26c196bacea7db10cf48',
    clientSecret: '0885cb690e07d2a93a6afb0891fb552fd9f7aa53',
    count: 10,
    sort: 'created: asc',
    repos: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const { username, clientId, clientSecret, count, sort } = gitRepo;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
        );
        const { data } = response;
        setGitRepo({ ...data, repos: data });
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const { repos } = gitRepo;
  return (
    <div className='projects-page'>
      <p className='git-repo-label'>Repositories</p>
      <div className='container'>
        {isLoading ? (
          <Spinner />
        ) : (
          repos.map(repo => <RepoCard {...repo} key={repo.id} />)
        )}
      </div>
    </div>
  );
};
