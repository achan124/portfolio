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
                spaceBetween={10}
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
                }}
            >

                <SwiperSlide>
                    <img src=".././public/img/food/madeinhouse.JPG" alt="First slide" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src=".././public/img/food/half-shell.JPG" alt="Fourth slide" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src=".././public/img/food/tendon-kohaku.JPG" alt="Second slide" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src=".././public/img/food/mcozy.JPG" alt="Third slide" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src=".././public/img/food/flour-box.JPG" alt="Fourth slide" className="carousel-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src=".././public/img/food/kizuki.JPG" alt="Fourth slide" className="carousel-image" />
                </SwiperSlide>
            </Swiper>

            <div className="custom-prev" ref={prevButtonRef}></div>
            <div className="custom-next" ref={nextButtonRef}></div>
        </div>
    );
}