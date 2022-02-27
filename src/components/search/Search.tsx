import react, { FC, useCallback, useEffect, useState } from 'react';

export type SearchGetResults<T> = (input: string) => Promise<T[]>;
export type SearchOnSelect<T> = (selected: T) => void;

interface SearchProps<T> {
    getResults: SearchGetResults<T>;
    onResultSelect: SearchOnSelect<T>;
}

type SearchResult = {
    title: string;
};

export const Search = <T extends SearchResult>({ getResults, onResultSelect }: SearchProps<T>) => {
    const [results, setResults] = useState<T[]>([]);

    useEffect(() => {
        (async () => {
            const results = await getResults('test');
            setResults(results);
        })();
    });

    return (
        <>
            {results.map(result => {
                return <button onClick={() => onResultSelect(result)}>{result.title}</button>;
            })}
        </>
    );
};
