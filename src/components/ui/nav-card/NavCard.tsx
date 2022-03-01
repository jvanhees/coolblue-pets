import { Heading } from 'components/typography/heading/Heading';
import React from 'react';
import styled from 'styled-components';

const NavCardContainer = styled.div``;

const IconContainer = styled.div`
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
    border-radius: 1em;
    background-color: ${props => props.theme.palette.shades.medium};
`;

const NavCardIcon = styled.picture`
    display: block;
    margin-top: -3em;

    > svg {
        width: 72px;
        height: 72px;
    }

    path {
        fill: ${props => props.theme.palette.primary};
    }
`;

export type NavCardProps = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
};

export const NavCard: React.FC<NavCardProps> = ({ Icon, title }) => {
    return (
        <NavCardContainer>
            <IconContainer>
                <NavCardIcon>
                    <Icon />
                </NavCardIcon>
            </IconContainer>
            <Heading level={4} as="span">
                {title}
            </Heading>
        </NavCardContainer>
    );
};
