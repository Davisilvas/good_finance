import { useState, useEffect } from 'react';

export function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return;
        
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const result = await response.json();
                console.log(result)
                setData(result);
                setError(null);
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            };
        }
        fetchData();
    }, [url, options])
    return { data, loading, error }
}



