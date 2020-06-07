import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { RepoCard } from './RepoCard';

interface GitProjectsProps {
  username: string;
  clientId: string;
  clientSecret: string;
  count: number;
  sort: string;
  repos: any[];
}

export const GitProjects: React.FC = () => {
  const [data, setData] = useState<GitProjectsProps>({
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
    const { username, clientId, clientSecret, count, sort } = data;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(
          `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
        );
        const { data } = response;
        setData({ ...data, repos: data });
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const { repos, clientId, clientSecret } = data;
  return (
    <div className='gitprojects--section'>
      <div className='container'>
        <h3 className='git--repos--label'>Repositories</h3>
        <div className='gitprojects--container'>
          {repos.map(repo => (
            <RepoCard
              {...repo}
              clientId={clientId}
              clientSecret={clientSecret}
              key={repo.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
