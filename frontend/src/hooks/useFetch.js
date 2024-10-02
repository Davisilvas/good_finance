import { useState, useEffect } from 'react';

export function useFetch(obj, url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!url) return;
        setLoading(true);

        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setError(null)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            });
    }, [url, obj])
    return { data, loading, error }
}



