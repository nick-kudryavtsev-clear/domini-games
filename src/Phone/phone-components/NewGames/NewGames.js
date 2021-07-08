import React, {Component} from 'react';
import Slider from "react-slick";
import './NewGames.css'
import GameCard from "./GameCard/GameCard";

//
import firstImg from './img/MMPuLnqz0A.jpeg'
import secondImg from './img/OeWfDrsGXE.jpeg'
import thirdImg from './img/VYlmZ8tQ94.jpeg'

export default class NewGames extends Component {
    render() {
        let settings = {
            fade: true,
            dots: false,
            infinite: true,
            speed: 3000,
            autoplaySpeed: 6000,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="new-games">
                <h2> Responsive </h2>
                <Slider {...settings}>
                    <div style={{
                        margin: '10px'
                    }}>
                        <GameCard image={firstImg} />
                    </div>
                    <div>
                        <GameCard image={secondImg} />
                    </div>
                    <div>
                        <GameCard image={thirdImg} />
                    </div>
                </Slider>
            </div>
        );
    }
}