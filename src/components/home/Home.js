import React from 'react'
import { DogBreeds } from './DogBreeds'

export const Home = () => {
    return (
        <div>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lj8-1dvazAU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <DogBreeds />
        </div>
    )
}
