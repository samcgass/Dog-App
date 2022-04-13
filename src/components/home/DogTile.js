import React, { useEffect, useState } from 'react'
import { LoadingSpinner } from '../shared/LoadingSpinner';
import axios from 'axios';

export const DogTile = ({ breed }) => {
    const [imgUrl, setImgUrl] = useState('');
    const [showLoading, setLoading] = useState(true);

    useEffect(() => {
        const [mainBreed, subBreed] = breed.split(' ');
        let endpoint;
        if (subBreed)
            endpoint = `https://dog.ceo/api/breed/${subBreed}/${mainBreed}/images/random/1`;
        else
            endpoint = `https://dog.ceo/api/breed/${mainBreed}/images/random/1`;
        axios.get(
            endpoint
        ).then(response => {
            setImgUrl(response.data.message[0]);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, [breed])

    return (
        <figure className='breeds_tile'>
            {showLoading ? <LoadingSpinner /> :
                <img src={imgUrl} alt={breed} />
            }
            <figcaption className='breeds_tile_name'>
                {breed}
            </figcaption>
        </figure>
    )
}
