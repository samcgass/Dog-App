import React, { useEffect, useState } from 'react'
import { LoadingSpinner } from '../shared/LoadingSpinner';
import axios from 'axios';

export const DogTile = ({ breed }) => {
    const [imgUrl, setImgUrl] = useState('');
    const [showLoading, setLoading] = useState(true);

    useEffect(() => {
        const [mainBreed, subBreed] = breed.split(' ');
        axios.get(
            `https://dog.ceo/api/breed/${subBreed}/${mainBreed}/images/random/1`
        ).then(response => {
            setImgUrl(response.data.message[0]);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, [breed])

    return (
        <div>
            {showLoading ? <LoadingSpinner /> :
                <img src={imgUrl} alt={breed} />
            }
            {breed}
        </div>
    )
}
