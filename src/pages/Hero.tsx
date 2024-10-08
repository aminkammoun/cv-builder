import React from 'react'
import { Home } from './Home'
import HeroHome from '../partials/HeroHome'
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import FrequentQs from '../partials/FrequentQs';
function Hero() {
    return (
        <div>

            <Home>
                <HeroHome />
                <FeaturesHome />
                <FeaturesBlocks />
                <FrequentQs />
                <Testimonials />
            </Home>

        </div>
    )
}

export default Hero