import React from 'react'
import { DogBreeds } from './DogBreeds'

export const Home = () => {
    return (
        <>
            <section className='main'>
                <div className='main_container'>
                    <h2 className='main_heading'>Lorem ipsum dolor sit amet</h2>
                    <p className='main_content'>
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <iframe className='main_video' src="https://www.youtube.com/embed/Lj8-1dvazAU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
            <DogBreeds />
        </>
    )
}
