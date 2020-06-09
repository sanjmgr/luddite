import React, { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { GoRepoForked } from 'react-icons/go';
import { IoMdStopwatch } from 'react-icons/io';
import Axios from 'axios';

interface RepoCardProps {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
  languages_url: string;
}

export const RepoCard: React.FC<RepoCardProps> = ({
  name,
  description,
  html_url,
  stargazers_count,
  watchers_count,
  forks_count,
  languages_url,
}: RepoCardProps) => {
  const [languages, setLanguage] = useState({
    clientId: '26c196bacea7db10cf48',
    clientSecret: '0885cb690e07d2a93a6afb0891fb552fd9f7aa53',
    languagesList: {},
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState(null);

  const { clientId, clientSecret, languagesList } = languages;
  const languagesUrl = `${languages_url}?client_id=${clientId}&client_secret=${clientSecret}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await Axios.get(languagesUrl);
        const { data } = response;
        setLanguage({ ...languages, languagesList: data });
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const keys: any[] = Object.keys(languagesList);
  const values: any[] = Object.values(languagesList);
  const total: any = values.reduce((acc: any, cv: any) => acc + cv, 0);
  const navigateToRepo = (url: any) => {
    window.location = url;
  };

  return (
    <div className='project--card'>
      <div className='card--label'>
        <p className='repo--label' onClick={() => navigateToRepo(html_url)}>
          {name}
        </p>
        <div className='repo--details--container'>
          <div className='repo--statistics'>
            <AiOutlineStar size={14} color='#fff' />
            <p className='statistics--counts'>{stargazers_count}</p>
          </div>
          <div className='repo--statistics'>
            <GoRepoForked size={14} color='#fff' />
            <p className='statistics--counts'>{forks_count}</p>
          </div>
          <div className='repo--statistics'>
            <IoMdStopwatch size={14} color='#fff' />
            <p className='statistics--counts'>{watchers_count}</p>
          </div>
        </div>
      </div>
      <p className='description'>
        {description ||
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam doloremque consectetur provident minima, doloribus nulla adipisci est accusamus blanditiis itaque velit temporibus, fuga quasi quis?'}
      </p>
      <div className='languages--container'>
        {keys.map((key, index) => (
          <p className='language' key={index}>
            {key}: {+((values[index] * 100) / total).toFixed(1) + '%'}
          </p>
        ))}
      </div>
    </div>
  );
};
