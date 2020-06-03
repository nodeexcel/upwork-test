import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import PrevButton from '../../icons/buttons/prev.png'
import NextButton from '../../icons/buttons/next.png'
import MongoImage from '../../icons/learningCarts/mongo.png'
import PhaserImage from '../../icons/learningCarts/phaser.png'
import HtmlImage from '../../icons/learningCarts/html.png'
import CImage from '../../icons/learningCarts/c++.jpg'
import "./scrollmenu.css"

const Menu = () => {
    const params = {
        slidesPerView: 3,
        spaceBetween: 2,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        renderPrevButton: () => <img src={PrevButton} style={{ left: "0px" }} className="swiper-button-prev" />,
        renderNextButton: () => <img src={NextButton} style={{ right: "0px" }} className="swiper-button-next" />,
    }
    return (<div className="CardBody">
        <Swiper  {...params}  >
            <img src={MongoImage} className="imgClass" />
            <img src={PhaserImage} className="imgClass cardPadding" />
            <img src={HtmlImage} className="imgClass cardPadding" />
            <img src={CImage} className="imgClass cardPadding" />
        </Swiper>
    </div>
    )
};
export default Menu;