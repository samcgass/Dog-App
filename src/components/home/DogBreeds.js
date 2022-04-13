import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { DogTile } from './DogTile';
import axios from "axios"


export const DogBreeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [showLoading, setLoading] = useState(true);

    const parseResponse = (response) => {
        let breeds = [];
        const data = response.data.message;
        for (let breed in data) {
            if (!!data[breed]) {
                data[breed].forEach(subbreed => {
                    breeds.push(`${subbreed} ${breed}`);
                });
            } else {
                breeds.push(breed);
            }
        }
        return breeds;
    }

    useEffect(() => {
        axios.get(
            'https://dog.ceo/api/breeds/list/all'
        ).then(response => {
            setBreeds(parseResponse(response));
            setLoading(false);
        }
        ).catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, []);

    return (
        <article className='breeds'>
            <h2>Dog Breeds</h2>
            {showLoading ? <LoadingSpinner /> :
                <div className='breeds_container'>
                    {breeds.map(breed => {
                        return (<DogTile key={breed} breed={breed} />)
                    })}
                </div>}
        </article>
    )
}
