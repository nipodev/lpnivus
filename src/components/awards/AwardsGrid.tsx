
import React from 'react';
import AwardCard from './AwardCard';

const AwardsGrid = () => {
  const awards = [
    {
      type: 'Pulseira',
      value: '5k',
      imageUrl: 'https://i.imgur.com/w88DR2Q.png',
      color: 'from-amber-500 to-yellow-600',
      description: 'Pulseira exclusiva NivusPay'
    },
    {
      type: 'Placa Bronze',
      value: '10k',
      imageUrl: 'https://i.imgur.com/w88DR2Q.png',
      color: 'from-amber-600 to-amber-700',
      description: 'Placa de reconhecimento Bronze'
    },
    {
      type: 'Placa Prata',
      value: '100k',
      imageUrl: 'https://i.imgur.com/EzOJJiR.png',
      color: 'from-gray-400 to-gray-600',
      description: 'Placa de reconhecimento Prata'
    },
    {
      type: 'Placa Ouro',
      value: '500k',
      imageUrl: 'https://i.imgur.com/xRMHowJ.png',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Placa de reconhecimento Ouro'
    },
    {
      type: 'Placa Platina',
      value: '1M',
      imageUrl: 'https://i.imgur.com/gTABXrP.png',
      color: 'from-blue-400 to-blue-600',
      description: 'Placa de reconhecimento Platina'
    },
    {
      type: 'Placa Diamante',
      value: '5M',
      imageUrl: 'https://i.imgur.com/uong4Yn.png',
      color: 'from-purple-400 to-purple-600',
      description: 'Placa de reconhecimento Diamante'
    },
    {
      type: 'Placa Elite',
      value: '10M',
      imageUrl: 'https://i.imgur.com/eldZBz2.png',
      color: 'from-red-500 to-red-700',
      description: 'Placa de reconhecimento Elite'
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {awards.map((award, index) => (
          <AwardCard
            key={index}
            type={award.type}
            value={award.value}
            imageUrl={award.imageUrl}
            color={award.color}
            description={award.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsGrid;
