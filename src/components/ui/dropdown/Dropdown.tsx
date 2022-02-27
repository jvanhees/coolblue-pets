import React from 'react';

import styled, { css } from 'styled-components';
import { Base } from './../base/Base';

import ChevronIcon from 'assets/icons/chevron-down.svg';

// TODO: Use Icon component instead of background
export const Dropdown = styled(Base.withComponent('select'))`
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${ChevronIcon});
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: calc(100% - 1em);
    padding-right: 2.5em;
`;
