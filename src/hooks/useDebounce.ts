import { useEffect, useState } from 'react';

// Generic reusable hook
export const useDebounce = <T>(value: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const debounceHandler = setTimeout(() => {
            console.log('timeout', value);
            setDebouncedValue(value);
        }, delay);

        // Cancel & cleanup
        return () => {
            clearTimeout(debounceHandler);
        };
    }, [value, delay]);

    // Return value
    return debouncedValue;
};
