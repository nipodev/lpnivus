import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AwardSlide from './AwardSlide';

const AwardsCarousel = () => {
  const awards = [
    {
      type: 'Pulseira',
      value: '5k',
      imageUrl: 'https://i.imgur.com/ux2gz2Q.png',
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
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
          {awards.map((award, index) => (
            <CarouselItem key={index} className="pl-2 sm:pl-3 md:pl-4 basis-[85%] sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
              <AwardSlide
                type={award.type}
                value={award.value}
                imageUrl={award.imageUrl}
                color={award.color}
                description={award.description}
                index={index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-nivus-primary text-white border-nivus-primary hover:bg-blue-600 -left-2 sm:-left-4 md:-left-6 lg:-left-10 xl:-left-14" />
        <CarouselNext className="bg-nivus-primary text-white border-nivus-primary hover:bg-blue-600 -right-2 sm:-right-4 md:-right-6 lg:-right-10 xl:-right-14" />
      </Carousel>
    </div>
  );
};

export default AwardsCarousel;
