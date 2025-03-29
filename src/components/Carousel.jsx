import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import charcuterie from "../assets/img/food/charcuterie.JPG";
import chirashi from "../assets/img/food/chirashi.JPG";
import eggsbennie from "../assets/img/food/eggsbennie.JPG";
import flourbox from "../assets/img/food/flourbox.JPG";
import halfshell from "../assets/img/food/half-shell.JPG";
import leon from "../assets/img/food/leon.JPG";
import madeinhouse from "../assets/img/food/madeinhouse.JPG";
import mcozy from "../assets/img/food/mcozy.JPG";
import onibaba from "../assets/img/food/onibaba.JPG";
import ramen from "../assets/img/food/ramen.JPG";
import secretcongee from "../assets/img/food/secretcongee.JPG";
import semicolon from "../assets/img/food/semicolon.JPG";
import tendonkohaku from "../assets/img/food/tendonkohaku.JPG";

export function Carousel() {
    const swiperRef = useRef(null);
    const prevButtonRef = useRef(null); 
    const nextButtonRef = useRef(null); 

    useEffect(() => {
        const prevButton = prevButtonRef.current;
        const nextButton = nextButtonRef.current;

        if (swiperRef.current && prevButton && nextButton) {
            prevButton.addEventListener("click", () => swiperRef.current.slidePrev());
            nextButton.addEventListener("click", () => swiperRef.current.slideNext());
        }

        return () => {
            if (prevButton) {
                prevButton.removeEventListener("click", () => swiperRef.current.slidePrev());
            }
            if (nextButton) {
                nextButton.removeEventListener("click", () => swiperRef.current.slideNext());
            }
        };
    }, []);

    return (
        <div className="carousel-container">
            <Swiper
                modules={[Navigation]} 
                spaceBetween={25}
                slidesPerView={1} 
                navigation={{
                    nextEl: ".custom-next", 
                    prevEl: ".custom-prev", 
                }}
                loop // Enable infinite loop
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    768: {slidesPerView: 2},
                    992: {slidesPerView: 3},
                    1200: {slidesPerView: 5},
                }}
            >

                <SwiperSlide>
                    <img src={onibaba} alt="onibaba" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chirashi} alt="chirashi" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tendonkohaku} alt="tendon kohaku" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={halfshell} alt="half shell" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={charcuterie} alt="charcuterie" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={mcozy} alt="mCozy" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eggsbennie} alt="eggs benedict" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={flourbox} alt="flour box" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={semicolon} alt="semicolon" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ramen} alt="ramen" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={leon} alt="leon cafe" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={secretcongee} alt="secret congee" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={madeinhouse} alt="made in house" className="carousel-image" />
                </SwiperSlide>
            </Swiper>

            <div className="custom-prev" ref={prevButtonRef}></div>
            <div className="custom-next" ref={nextButtonRef}></div>
        </div>
    );
}