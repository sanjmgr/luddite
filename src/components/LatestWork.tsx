import React from 'react';

interface LatestWorkProps {
  title: string;
  cards: string;
  techs: string[];
}

export const LatestWork = ({ title, cards, techs }: LatestWorkProps) => {
  return (
    <div className='card--container'>
      <div className='card--title'>
        <p className='primary--card-title'>{title}</p>
        <div className='tech--list'>
          {techs.map((tech, index) => (
            <p className='tech--title' key={index}>
              {tech}
            </p>
          ))}
        </div>
      </div>
      <div className='cards--container'>
        <img className='cards' src={cards} alt='cards' />
      </div>
    </div>
  );
};
