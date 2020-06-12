import React from 'react';
interface CategoryProps {
  label: string;
  description: string;
  projectsCount: number;
  Icon: Function | any;
  size: number;
}

export const Category = ({
  label,
  description,
  projectsCount,
  Icon,
  size = 30,
}: CategoryProps) => {
  const navigateToGitHub = () => {
    const url: any = 'https://github.com/sanjaymagar';
    window.location = url;
  };
  return (
    <div className='work--container'>
      <div className='label--brief'>
        <p className='primary--label'>{label}</p>
        <p className='secondary--label'>{description}</p>
        <p className='projects--count' onClick={navigateToGitHub}>
          {projectsCount} Projects
        </p>
      </div>
      <div className='icon--container'>
        <Icon size={size} color='#5fba8e' />
      </div>
    </div>
  );
};
