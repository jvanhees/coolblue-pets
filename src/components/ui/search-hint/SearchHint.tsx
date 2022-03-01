import React from 'react';
import styled from 'styled-components';

const SearchHintButton = styled.button`
    display: block;
    padding: 1em 0;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
`;

type SearchHintProps = {
    input: string;
    hint: string;
    onSuggestionSelect: (hint: string) => void;
};

// TODO: Check input for malicious stuff
export const SearchHint: React.FC<SearchHintProps> = ({ input, hint, onSuggestionSelect }) => {
    // Maybe optimize this
    const re = new RegExp(input, 'gdi');
    const hintHtml = hint.replace(re, '<strong>$&</strong>');

    return (
        <SearchHintButton
            onClick={() => onSuggestionSelect(hint)}
            dangerouslySetInnerHTML={{ __html: hintHtml }}
        ></SearchHintButton>
    );
};
