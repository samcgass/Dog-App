import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '../shared/LoadingSpinner';


export const DogBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [showLoading, setLoading] = useState(true);

    useEffect(() => {
        console.log("get breeds here");
    }, []);

    return (
        <div>
            {showLoading ? <LoadingSpinner /> : <>breeds</>}
        </div>
    )
}
