import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
                    <img src="/img/food/onibaba.JPG" alt="onibaba" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/chirashi.JPG" alt="chirashi" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/tendonkohaku.JPG" alt="tendon kohaku" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/half-shell.JPG" alt="half shell" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/charcuterie.JPG" alt="charcuterie" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/mcozy.JPG" alt="mCozy" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/eggsbennie.JPG" alt="eggs benedict" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/flourbox.JPG" alt="flour box" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/semicolon.JPG" alt="semicolon" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/ramen.JPG" alt="ramen" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/leon.JPG" alt="leon cafe" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/secretcongee.JPG" alt="secret congee" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/food/madeinhouse.JPG" alt="made in house" className="carousel-image" />
                </SwiperSlide>
            </Swiper>

            <div className="custom-prev" ref={prevButtonRef}></div>
            <div className="custom-next" ref={nextButtonRef}></div>
        </div>
    );
}