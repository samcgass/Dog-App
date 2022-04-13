import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { DogTile } from './DogTile';


export const DogBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [showLoading, setLoading] = useState(true);

    useEffect(() => {
        console.log("get breeds here");
        setBreeds(['breeds']);
        setLoading(false);
    }, []);

    return (
        <div>
            {showLoading ? <LoadingSpinner /> :
                <div>
                    {breeds.map(breed => {
                        return (<DogTile key={breed} breed={breed} />)
                    })}
                </div>}
        </div>
    )
}
