import React, { useEffect, useState } from 'react'
import { LoadingSpinner } from '../shared/LoadingSpinner';

export const DogTile = ({ breed }) => {
    const [imgUrl, setImgUrl] = useState('');
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        console.log("get dog image here");
        setImgUrl('');
        setShowLoading(false);
    }, [])

    return (
        <div>
            {showLoading ? <LoadingSpinner /> :
                <img src={imgUrl} alt={breed} />
            }
            {breed}
        </div>
    )
}
