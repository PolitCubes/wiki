import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css/bundle'
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, {
    Pagination,Navigation
} from 'swiper';

import styles from './carousel.module.css';

SwiperCore.use([Pagination,Navigation]);

export default (props) => {
    return (
        <Swiper
            pagination={true}
            navigation={true}
        >
            {React.Children.map(props.children, (child) => (
                <SwiperSlide className={styles['swiper-slide']}>{child}</SwiperSlide>
            ))}
        </Swiper>
    )
}
