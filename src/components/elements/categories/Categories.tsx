import { NavCard, NavCardProps } from 'components/ui/nav-card/NavCard';
import React from 'react';

import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Pin } from 'assets/icons/pin.svg';
import { ReactComponent as Clock } from 'assets/icons/clock.svg';
import { ReactComponent as Confettie } from 'assets/icons/confettie.svg';
import { ReactComponent as Home } from 'assets/icons/home.svg';
import { Carousel } from 'components/ui/carousel/Carousel';

const CategoryData: NavCardProps[] = [
    {
        title: 'All pets',
        Icon: Heart,
    },
    {
        title: 'Location specific',
        Icon: Pin,
    },
    {
        title: 'Age specific',
        Icon: Clock,
    },
    {
        title: 'Available now',
        Icon: Confettie,
    },
    {
        title: 'For small or big homes',
        Icon: Home,
    },
];

export const Categories: React.FC = () => {
    return (
        <Carousel columns={5} items={CategoryData.length} scrollable={true}>
            {CategoryData.map((category, index) => (
                <NavCard key={index} title={category.title} Icon={category.Icon} />
            ))}
        </Carousel>
    );
};
